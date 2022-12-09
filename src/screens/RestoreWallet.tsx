import React from 'react';
import Flex from '@components/Flex';
import {Gutter} from '@theme/Spacing';
import {Outline, Secondary} from '@components/Button';
import {RootRoutes} from '@navigation/routes';
import {NavigationScreenProp} from 'react-navigation';
import {RegistrationHeader} from '@components/organisms/RegistrationHeader';
import {AuthLayout} from '@components/templates/AuthLayout';

export function RestoreWallet({
  navigation,
}: {
  navigation: NavigationScreenProp<{}, {}>;
}) {
  return (
    <AuthLayout
      Header={
        <RegistrationHeader
          pageNumber={1}
          headingText={'Restore your wallet'}
          description={
            <>
              You can restore your wallet quickly by entering the 12 words
              recovery phrase associated with the wallet.
            </>
          }
        />
      }
      Footer={
        <Flex py={Gutter.REGULAR} alignItems={'stretch'} fullwidth>
          <Secondary
            rounded
            loading={false}
            fullwidth={true}
            text={'Restore from iCloud'}
            onPress={() => {
              navigation.navigate(RootRoutes.SelectWallet);
            }}
          />
          <Flex my={6} />
          <Outline rounded fullwidth={true} text={'Enter recovery phase'} />
        </Flex>
      }
    />
  );
}
