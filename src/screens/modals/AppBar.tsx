import React from 'react';
import {Animated, Keyboard, TouchableOpacity} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import Flex from '@components/Flex';
import {Secondary} from '@components/Button';
import {COLORS} from '@theme/ThemeColors';
import {BaseText} from '@components/Typography';
import {Gutter} from '@theme/Spacing';
import {Close} from '@components/Icons';

type Props = {
  title: string;
  relative?: boolean;
  translateY?: Animated.Value;
  actionTitle?: string;
  action?: () => void;
  isLoading?: boolean;
  activateButton?: boolean;
  showActionButton?: boolean;
  onBackPress?: () => void;
};

const AppBar: React.FC<{
  title: string;
  relative?: boolean;
  translateY?: any;
  actionTitle?: string;
  action?: () => void;
  isLoading?: boolean;
  activateButton?: boolean;
  showActionButton?: boolean;
  icon?: React.ReactNode;
  showBottomBar?: boolean;
  onBackPress?: () => void;
}> = ({
  title = '',
  relative = false,
  translateY,
  actionTitle = '',
  action = () => {},
  isLoading = false,
  activateButton = false,
  showActionButton = false,
  icon,
  showBottomBar = true,
  onBackPress,
}: Props) => {
  const navigation = useNavigation();
  const opacity =
    translateY &&
    translateY.interpolate({
      inputRange: [40, 70],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    });

  return (
    <Flex.Row
      alignItems="center"
      style={[
        {
          zIndex: 1000,
          paddingTop: 8,
          borderBottomWidth: showBottomBar ? 1 : 0,
          borderColor: COLORS.neutral.smokeLight100,
        },
        relative
          ? {
              paddingHorizontal: Gutter.REGULAR / 2,
            }
          : {
              position: 'absolute',
              left: 16,
              right: 16,
            },
      ]}>
      <TouchableOpacity
        activeOpacity={1}
        style={{
          width: 46,
          height: 46,
          alignItems: 'center',
          justifyContent: 'center',
        }}
        onPress={() => {
          Keyboard.dismiss();
          setTimeout(() => {
            onBackPress ? onBackPress() : navigation.goBack();
          }, 200);
        }}>
        {icon || <Close color={COLORS.neutral.smokeDark900} />}
      </TouchableOpacity>

      <Flex
        mr={46}
        style={{
          flex: 1,
          alignSelf: 'stretch',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Animated.View style={{opacity: opacity ?? 1}}>
          <BaseText
            bold
            style={{
              textAlign: 'center',
              fontSize: 15,
              color: COLORS.neutral.smokeDark900,
            }}>
            {title}
          </BaseText>
        </Animated.View>
      </Flex>
      {showActionButton && (
        <Flex
          height={46}
          style={{
            position: 'absolute',
            right: 0,
            top: 8,
          }}>
          <Secondary
            text={actionTitle}
            fullwidth
            loading={isLoading}
            disabled={activateButton ? isLoading : true}
            onPress={action}
          />
        </Flex>
      )}
    </Flex.Row>
  );
};

export default AppBar;
