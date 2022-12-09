import React from 'react';
import {FlatList, Pressable, TouchableOpacity} from 'react-native';
import Flex from '@components/Flex';
import {Primary} from '@components/Button';
import {RootRoutes} from '@navigation/routes';
import {NavigationScreenProp} from 'react-navigation';
import {RegistrationHeader} from '@components/organisms/RegistrationHeader';
import {AuthLayout} from '@components/templates/AuthLayout';
import {BaseText} from '@components/Typography';
import {COLORS} from '@theme/ThemeColors';
import {ArrowRight, ChevronRight, ExpandLeft, Key} from '@components/Icons';
import {SecureInputWithMessage} from '@components/FlatInput';

export function SelectWallet({
  navigation,
}: {
  navigation: NavigationScreenProp<{}, {}>;
}) {
  const wallets = React.useRef([
    'My defi tokens',
    'Shitcoins',
    'Degen_villa',
  ]).current;
  const [wallet, setWallet] = React.useState('NONE');

  return (
    <AuthLayout
      Header={
        <>
          {wallet === 'NONE' ? (
            <RegistrationHeader
              pageNumber={2}
              headingText={'Select wallet'}
              description={<>Choose preferred wallet to restore </>}
            />
          ) : (
            <RegistrationHeader
              pageNumber={2}
              headingText={'Enter password '}
              description={
                <>
                  To restore “My defi tokens”, enter the password associated
                  with the backup.
                </>
              }
            />
          )}

          {wallet !== 'NONE' && (
            <>
              <Flex mt={36} />
              <SecureInputWithMessage label={'Enter password'} />
            </>
          )}

          {wallet === 'NONE' && (
            <>
              <Flex my={12} />
              <FlatList
                data={wallets}
                ItemSeparatorComponent={() => <Flex mt={12} />}
                renderItem={({item, index}) => (
                  <Pressable
                    onPress={() => {
                      setWallet(item);
                    }}>
                    <Flex.Row
                      key={index}
                      outline
                      fullwidth
                      py={16}
                      px={15}
                      alignItems={'center'}
                      style={{
                        borderRadius: 8,
                        borderColor: COLORS.neutral.smokeLight200,
                      }}>
                      <Flex.Row flex={1} alignItems={'center'}>
                        <Flex
                          outline
                          alignItems={'center'}
                          justifyContent={'center'}
                          style={{
                            width: 42,
                            height: 42,
                            borderRadius: 21,
                            borderColor: COLORS.neutral.smokeLight200,
                          }}
                          mr={12}>
                          <Key width={24} height={24} />
                        </Flex>

                        <BaseText medium style={{fontSize: 16}}>
                          {item}
                        </BaseText>
                      </Flex.Row>

                      <ChevronRight
                        height={12}
                        width={12}
                        color={COLORS.neutral.smokeDark500}
                      />
                    </Flex.Row>
                  </Pressable>
                )}
              />
            </>
          )}
        </>
      }
      Footer={
        <>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Flex.Row>
              <ExpandLeft width={20} height={20} />
              <BaseText>Go back</BaseText>
            </Flex.Row>
          </TouchableOpacity>

          <Primary
            rounded
            loading={false}
            disabled={false}
            Icon={
              <ArrowRight color={COLORS.neutral.white} width={20} height={20} />
            }
            iconOnly={true}
            size={54}
            onPress={() => {
              navigation.navigate(RootRoutes.EnterPin);
            }}
          />
        </>
      }
    />
  );
}
