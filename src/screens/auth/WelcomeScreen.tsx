import {SafeAreaView, useWindowDimensions} from 'react-native';
import React from 'react';
import {BaseText, H1} from '@components/Typography';
import {Flex} from '@components/Flex';
import {Gutter} from '@theme/Spacing';
import {COLORS} from '@theme/ThemeColors';
import * as Button from '@components/Button';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {NavigationScreenProp} from 'react-navigation';
import {RootRoutes} from '@navigation/routes';

const WelcomeScreen = ({
  navigation,
}: {
  navigation: NavigationScreenProp<{}, {}>;
}) => {
  const dim = useWindowDimensions();
  const inset = useSafeAreaInsets();

  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.neutral.white}}>
      <Flex
        flex={1}
        mx={Gutter.SMALL}
        pt={dim.height * 0.1}
        alignItems={'center'}
        style={{
          backgroundColor: COLORS.neutral.white,
        }}>
        <H1>Orange</H1>
        <Flex mt={12} />
        <BaseText>Your keys, your coins!</BaseText>
      </Flex>

      <Flex
        mb={-inset.bottom}
        alignItems={'center'}
        pb={inset.bottom + Gutter.MEDIUM}
        justifyContent={'flex-end'}
        style={{
          backgroundColor: COLORS.primary_1.Light,
          minHeight: dim.height * 0.35,
        }}>
        <Button.Primary
          text={'Connect a wallet'}
          disabled={false}
          rounded
          style={{minWidth: 250}}
          onPress={() => navigation.navigate(RootRoutes.BackupWallet)}
        />

        <Button.Ghost
          text={'Restore your wallet'}
          style={{minWidth: 250}}
          onPress={() => navigation.navigate(RootRoutes.RestoreWallet)}
        />
      </Flex>
    </SafeAreaView>
  );
};

export default WelcomeScreen;
