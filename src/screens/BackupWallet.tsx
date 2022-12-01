import React, {useState} from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';
import Flex from '@components/Flex';
import {BaseText} from '@components/Typography';
import {Gutter} from '@theme/Spacing';
import {COLORS} from '@theme/ThemeColors';
import {Outline, Secondary} from '@components/Button';
import {RootRoutes} from '@navigation/routes';
import {NavigationScreenProp} from 'react-navigation';
import {RegistrationHeader} from '@components/organisms/RegistrationHeader';
import {CopyButton} from '@components/molecules/CopyButton';
import {EyeHideLight, EyeLight} from '@components/Icons';
import {BlurView} from '@react-native-community/blur';
import {AuthLayout} from '@components/templates/AuthLayout';

const staticSecrets = [
  'axis',
  'plenary',
  'shadow',
  'abode',
  'body',
  'optimism',
  'cue',
  'zebra',
  'plug',
  'buoy',
  'coil',
  'elephant',
];

export function BackupWallet({
  navigation,
}: {
  navigation: NavigationScreenProp<{}, {}>;
}) {
  const [secrets] = useState(staticSecrets);
  const [showSecrets, setShowSecrets] = useState(false);

  return (
    <AuthLayout
      Header={
        <>
          <RegistrationHeader
            pageNumber={1}
            headingText={'Backup your wallet'}
            description={
              <>
                Write these 12 words carefully, or save them to a password
                manager.
                {'\n\n'}
                They will be used to restore your crypto if you lose your phone
              </>
            }
          />
          <Flex
            outline
            mt={Gutter.LARGE}
            px={16}
            py={12}
            alignItems={'stretch'}
            style={{
              borderRadius: 12,
              position: 'relative',
              overflow: 'hidden',
              backgroundColor: COLORS.neutral.white,
              borderColor: COLORS.neutral.smokeLight200,
            }}>
            {!showSecrets && (
              <BlurView
                blurType="light"
                blurAmount={12}
                style={[
                  StyleSheet.absoluteFillObject,
                  {zIndex: 2, borderRadius: 12, bottom: 40},
                ]}
                reducedTransparencyFallbackColor={COLORS.neutral.white}
              />
            )}

            <Flex.Row
              fullwidth
              style={{
                flexWrap: 'wrap',
              }}>
              {secrets.map(e => (
                <Flex key={e} px={3} py={4}>
                  <BaseText style={{color: COLORS.primary_2.greyDark700}}>
                    {e}
                  </BaseText>
                </Flex>
              ))}
            </Flex.Row>

            <Flex.Row mt={Gutter.LARGE * 2} justifyContent={'space-between'}>
              <CopyButton onPress={() => {}} />

              <TouchableOpacity onPress={() => setShowSecrets(!showSecrets)}>
                <Flex.Row alignItems={'center'}>
                  {!showSecrets ? (
                    <EyeLight width={20} height={20} />
                  ) : (
                    <EyeHideLight width={20} height={20} />
                  )}
                  <BaseText style={{fontSize: 14, marginLeft: 4}}>
                    {!showSecrets ? 'Reveal' : 'Hide'}
                  </BaseText>
                </Flex.Row>
              </TouchableOpacity>
            </Flex.Row>
          </Flex>
        </>
      }
      Footer={
        <Flex py={Gutter.REGULAR} alignItems={'stretch'} fullwidth>
          <Secondary
            rounded
            loading={false}
            fullwidth={true}
            text={'Backup to iCloud'}
            onPress={() => {
              navigation.navigate(RootRoutes.CreatePassword);
            }}
          />
          <Flex my={6} />
          <Outline rounded fullwidth={true} text={'Backup manually'} />
        </Flex>
      }
    />
  );
}
