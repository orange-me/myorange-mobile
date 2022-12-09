import React from 'react';
import {BlurView} from '@react-native-community/blur';
import {StyleProp, StyleSheet, View, ViewStyle} from 'react-native';
import {COLORS} from '@theme/ThemeColors';

export const BlurBox: React.FC<{
  state: boolean;
  blurAmount?: number;
  children: React.ReactNode;
  style?: StyleProp<ViewStyle>;
  contentContainerStyle?: StyleProp<ViewStyle>;
}> = ({
  state,
  blurAmount = 8,
  children,
  style = {},
  contentContainerStyle = {},
}) => (
  <View
    style={[
      {
        position: 'relative',
        alignItems: 'center',
        paddingVertical: 8,
      },
      contentContainerStyle,
    ]}>
    {state && (
      <BlurView
        blurType="light"
        blurAmount={blurAmount}
        style={[StyleSheet.absoluteFillObject, {zIndex: 2}, style]}
        reducedTransparencyFallbackColor={COLORS.neutral.white}
      />
    )}
    {children}
  </View>
);
