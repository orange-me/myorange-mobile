import React from 'react';
import {TouchableOpacity} from 'react-native';
import {COLORS} from '@theme/ThemeColors';
import Flex from '@components/Flex';
import {Gutter} from '@theme/Spacing';
import {Primary} from '@components/Button';
import {BaseText, InputMessageText} from '@components/Typography';
import {ArrowRight, ExpandLeft} from '@components/Icons';
import {RegistrationHeader} from '@components/organisms/RegistrationHeader';
import {SecureInput, SecureInputWithMessage} from '@components/FlatInput';
import {PasswordChecker} from '@components/organisms/PasswordChecker';
import {RootRoutes} from '@navigation/routes';
import {AuthLayout} from '@components/templates/AuthLayout';

export function CreatePassword({navigation}: {navigation: any}) {
  const [showPassword, setShowPassword] = React.useState(false);
  const [value, setValue] = React.useState('Oops!');

  return (
    <AuthLayout
      Header={
        <>
          <RegistrationHeader
            pageNumber={2}
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

          <Flex mt={24}>
            <SecureInput
              value={value}
              label={'Enter password'}
              secureTextEntry={!showPassword}
              onChangeText={text => setValue(text)}
              toggleSecretEntry={() => setShowPassword(!showPassword)}
            />

            <Flex mt={Gutter.SMALL} fullwidth>
              <PasswordChecker value={value} />
            </Flex>

            <Flex my={12} />

            <SecureInputWithMessage
              value={value}
              label={'Confirm Password'}
              hasError={true}
              secureTextEntry={!showPassword}
              onChangeText={text => setValue(text)}
              toggleSecretEntry={() => setShowPassword(!showPassword)}
              message={
                <Flex mt={8}>
                  <InputMessageText>Password does not exist</InputMessageText>
                </Flex>
              }
            />
          </Flex>
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
