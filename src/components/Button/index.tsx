import React, {PropsWithChildren, ReactElement} from 'react';
import {ActivityIndicator, TouchableOpacityProps} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
// @ts-ignore
import styled, {css} from 'styled-components/native';
import Flex from '../Flex';
import {fullwidth, withProp} from '../styled_helpers';
import {ButtonText} from '@components/Typography';
import {COLORS} from '@theme/ThemeColors';

const DEFAULT_STATIC_PROPS = {
  textColor: COLORS.neutral.smokeDark800,
  textOutlineColor: COLORS.neutral.smokeLight400,
  indicatorColor: COLORS.neutral.white,
  textDisabledColor: COLORS.neutral.smokeLight400,
};

type WithIconProps = TouchableOpacityProps & {
  Icon?: JSX.Element;
  loading?: boolean;
  LoadIndicator?: ReactElement<any, 'ActivityIndicator'>;
  small?: boolean;
  text?: JSX.Element | string;
  fontSize?: number;
  textColor?: string;
} & (
    | {
        iconOnly?: false;
      }
    | {
        iconOnly: true;
        size: number;
      }
  );

type ButtonProps = {
  text?: string;
  outline?: boolean;
  fullwidth?: boolean;
  disabled?: boolean;
  rounded?: boolean;
  ActivityIndicatorTestID?: string;
} & TouchableOpacityProps &
  WithIconProps;

const WithIcon = ({
  loading,
  Icon,
  text,
  LoadIndicator,
  ...props
}: WithIconProps) => {
  return (
    <Flex.Row
      alignItems="center"
      justifyContent="center"
      style={{width: 'auto', alignSelf: 'center'}}>
      <Flex style={{flexShrink: 0}}>
        {loading ? LoadIndicator : Icon || null}
      </Flex>

      {props?.iconOnly ? null : (
        <ButtonText
          small={props.small}
          style={{
            fontSize: props.fontSize,
            textAlign: 'center',
            opacity: 1,
            marginLeft: Icon || loading ? 5 : 0,
            color: props.textColor,
          }}>
          {text}
        </ButtonText>
      )}
    </Flex.Row>
  );
};

const buildStructure = (
  Button: (props: PropsWithChildren<TouchableOpacityProps>) => JSX.Element,
  staticProps = DEFAULT_STATIC_PROPS,
) =>
  function CustomButton({text, onPress, ...props}: ButtonProps) {
    return (
      <Button
        onPress={onPress}
        {...props}
        style={[
          props.style,
          props.iconOnly ? {width: props.size, height: props.size} : undefined,
        ]}
        disabled={props.loading ? true : props.disabled}
        accessibilityState={{disabled: props?.disabled ?? false}}>
        <WithIcon
          Icon={props.Icon}
          small={props.small}
          fontSize={props.fontSize}
          loading={props.loading}
          disabled={props.loading || props.disabled}
          LoadIndicator={
            <ActivityIndicator
              testID={props.ActivityIndicatorTestID}
              color={staticProps.indicatorColor}
              size="small"
            />
          }
          text={text}
          textColor={
            props.disabled
              ? staticProps.textDisabledColor
              : props.outline
              ? staticProps.textOutlineColor
              : staticProps.textColor
          }
          {...props}
        />
      </Button>
    );
  };

const BaseButton = styled(TouchableOpacity).attrs({
  activeOpacity: 0.8,
})`
  border-radius: 12px;
  justify-content: center;
  align-items: center;
  padding: 15px 20px;

  ${withProp(
    'rounded',
    css`
      border-radius: 999px;
    `,
  )}

  ${withProp('small', css``)}

  ${fullwidth};
`;

export const Primary = buildStructure(
  styled(BaseButton)`
    background-color: ${COLORS.primary_1.Dark500};
    width: 100%;

    ${withProp(
      'disabled',
      css`
        background-color: ${COLORS.primary_1.Light200} !important;
      `,
    )}
  `,
  {
    textColor: COLORS.neutral.white,
    indicatorColor: COLORS.neutral.white,
    textOutlineColor: COLORS.primary_1.Light400,
    textDisabledColor: COLORS.neutral.white,
  },
);

export const Secondary = buildStructure(
  styled(BaseButton)`
    background-color: ${COLORS.neutral.black};

    ${withProp(
      'disabled',
      css`
        background-color: ${COLORS.neutral.black} !important;
      `,
    )}
  `,
  {
    textColor: COLORS.neutral.white,
    indicatorColor: COLORS.neutral.white,
    textOutlineColor: COLORS.primary_1.Light400,
    textDisabledColor: COLORS.neutral.smokeLight200,
  },
);

export const Outline = buildStructure(
  styled(BaseButton)`
    background-color: transparent;
    border: solid 1px ${COLORS.primary_2.greyLight100};
  `,
  {
    textColor: COLORS.neutral.smokeDark900,
    indicatorColor: COLORS.error.redLight400,
    textOutlineColor: COLORS.error.redLight400,
    textDisabledColor: COLORS.neutral.smokeLight200,
  },
);

export const Danger = buildStructure(
  styled(BaseButton)`
    background-color: ${COLORS.neutral.smokeLight100};
    width: 100%;
  `,
  {
    textColor: COLORS.error.redLight400,
    indicatorColor: COLORS.error.redLight400,
    textOutlineColor: COLORS.error.redLight400,
    textDisabledColor: COLORS.neutral.smokeLight200,
  },
);

export const Ghost = buildStructure(
  styled(BaseButton)`
    background-color: transparent;
  `,
  {
    textColor: COLORS.neutral.smokeDark900,
    indicatorColor: COLORS.error.redLight400,
    textOutlineColor: COLORS.error.redLight400,
    textDisabledColor: COLORS.neutral.smokeLight200,
  },
);

export default BaseButton;
