import React from 'react';
import {SafeAreaView, TouchableOpacity} from 'react-native';
import {COLORS} from '@theme/ThemeColors';
import Flex from '@components/Flex';
import {Gutter} from '@theme/Spacing';
import {Primary} from '@components/Button';
import {BaseText} from '@components/Typography';
import {ArrowRight, ExpandLeft} from '@components/Icons';
import {RegistrationHeader} from '@components/organisms/RegistrationHeader';

export function CreatePassword({navigation}: {navigation: any}) {
  return (
    <SafeAreaView style={{flex: 1}}>
      <Flex justifyContent={'space-between'} mx={Gutter.REGULAR} flex={1}>
        <Flex>
          <RegistrationHeader
            pageNumber={1}
            headingText={'Create a password'}
            description={
              <>
                To keep your cloud backup secure, please enter a password.
                {'\n\n'}
                Only people with this password can gain access to restore this
                wallet.
              </>
            }
          />
        </Flex>

        <Flex.Row
          justifyContent={'space-between'}
          fullwidth
          alignItems={'center'}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Flex.Row>
              <ExpandLeft width={20} height={20} />
              <BaseText>Go back</BaseText>
            </Flex.Row>
          </TouchableOpacity>

          <Primary
            rounded
            loading={false}
            disabled={true}
            Icon={
              <ArrowRight color={COLORS.neutral.white} width={20} height={20} />
            }
            iconOnly={true}
            size={54}
          />
        </Flex.Row>
      </Flex>
    </SafeAreaView>
  );
}
