import React from 'react';
import {TouchableOpacity} from 'react-native';
import {RegistrationHeader} from '@components/organisms/RegistrationHeader';
import Flex from '@components/Flex';
import {BaseText} from '@components/Typography';
import {COLORS} from '@theme/ThemeColors';
import {Primary} from '@components/Button';
import {ArrowRight, ExpandLeft} from '@components/Icons';
import {FlatInput} from '@components/FlatInput';
import {RootRoutes} from '@navigation/routes';
import {AuthLayout} from '@components/templates/AuthLayout';

export function NameWallet({navigation}: any) {
  const [value, setValue] = React.useState('');

  return (
    <AuthLayout
      Header={
        <Flex>
          <RegistrationHeader
            pageNumber={4}
            headingText={'Name your wallet'}
            description={
              <>To keep your cloud backup secure, please enter a password.</>
            }
          />
          <Flex my={12} />
          <FlatInput
            label={'Enter wallet name'}
            value={value}
            onChangeText={setValue}
          />
          <Flex mt={4} />
        </Flex>
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
