import React from 'react';
import {RegistrationHeader} from '@components/organisms/RegistrationHeader';
import Flex from '@components/Flex';
import {BaseText} from '@components/Typography';
import {COLORS} from '@theme/ThemeColors';
import {RootRoutes} from '@navigation/routes';
import {Primary} from '@components/Button';
import {ArrowRight} from '@components/Icons';
import {AuthLayout} from '@components/templates/AuthLayout';
import {CharInput} from '@components/FlatInput';
import {Gutter} from '@theme/Spacing';
import {useVerify} from '@hooks/useVerify';
import {NavigationScreenProp} from 'react-navigation';
import {Linking, TouchableOpacity} from 'react-native';
import {Checkbox} from '@components/Checkbox';

export function EnterPin({
  navigation,
}: {
  navigation: NavigationScreenProp<any>;
}) {
  const {register, isValid} = useVerify({length: 4});
  const [agreed, setAgreed] = React.useState(false);

  console.log('isValid', isValid);

  return (
    <AuthLayout
      Header={
        <>
          {agreed ? (
            <RegistrationHeader
              pageNumber={3}
              headingText={'Select a PIN'}
              description={
                <>Add an extra layer of security when using orange</>
              }
            />
          ) : (
            <RegistrationHeader
              pageNumber={3}
              headingText={'Keep your account safe and secure'}
              description={
                <>
                  Your account PIN helps you confirm transactions easily. Keep
                  it safe and do not share with anyone to ensure your funds are
                  safe
                </>
              }
            />
          )}

          {agreed && (
            <Flex.Row alignItems={'center'} my={32} justifyContent={'center'}>
              <CharInput {...register(0)} secureTextEntry={true} />
              <Flex mx={Gutter.XSMALL} />

              <CharInput {...register(1)} secureTextEntry={true} />

              <Flex mx={Gutter.XSMALL} />

              <CharInput {...register(2)} secureTextEntry={true} />

              <Flex mx={Gutter.XSMALL} />

              <CharInput {...register(3)} secureTextEntry={true} />
            </Flex.Row>
          )}
        </>
      }
      Footer={
        <>
          <CheckTerms
            value={agreed}
            onPress={() => {
              setAgreed(!agreed);
            }}
          />

          <Primary
            rounded
            loading={false}
            disabled={!(agreed && isValid)}
            Icon={
              <ArrowRight color={COLORS.neutral.white} width={20} height={20} />
            }
            iconOnly={true}
            size={54}
            onPress={() => {
              navigation.navigate(RootRoutes.NameWallet);
            }}
          />
        </>
      }
    />
  );
}

const CheckTerms = (props: any) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => {
        props.onPress();
      }}>
      <Flex.Row justifyContent={'center'}>
        <Flex mr={8}>
          <Checkbox value={props.value} onPress={props.onPress} />
        </Flex>
        <BaseText style={{fontSize: 14}}>I agree to the</BaseText>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://etherscan.net')}>
          <BaseText
            style={{
              fontSize: 14,
              textDecoration: 'underline',
              color: COLORS.primary_1.Dark500,
            }}>
            &nbsp;terms&nbsp;
          </BaseText>
        </TouchableOpacity>
        <BaseText style={{fontSize: 14}}>and</BaseText>
        <TouchableOpacity
          onPress={() => Linking.openURL('https://etherscan.net')}>
          <BaseText
            style={{
              fontSize: 14,
              textDecoration: 'underline',
              color: COLORS.primary_1.Dark500,
            }}>
            &nbsp;conditions&nbsp;
          </BaseText>
        </TouchableOpacity>
      </Flex.Row>
    </TouchableOpacity>
  );
};
