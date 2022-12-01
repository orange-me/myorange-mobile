import React from 'react';
import {KeyboardAvoidingView, SafeAreaView} from 'react-native';
import {COLORS} from '@theme/ThemeColors';
import Flex from '@components/Flex';
import {Gutter} from '@theme/Spacing';

export const AuthLayout: React.FC<{
  Header: JSX.Element;
  Footer: JSX.Element;
}> = props => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: COLORS.neutral.white}}>
      <KeyboardAvoidingView behavior={'height'} style={{flex: 1}}>
        <Flex justifyContent={'space-between'} mx={Gutter.REGULAR} flex={1}>
          <Flex alignItems={'stretch'}>{props.Header}</Flex>

          <Flex.Row
            justifyContent={'space-between'}
            fullwidth
            mb={Gutter.REGULAR}
            alignItems={'center'}>
            {props.Footer}
          </Flex.Row>
        </Flex>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};
