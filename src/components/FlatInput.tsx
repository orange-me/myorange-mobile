import React, {useImperativeHandle, useLayoutEffect} from 'react';
import {
  Animated,
  Easing,
  StyleProp,
  TextInput,
  TextInputProps,
  TextStyle,
  TouchableOpacity,
} from 'react-native';
import Flex from '@components/Flex';
import {EyeHideLight, EyeLight} from '@components/Icons';
import {BaseText} from '@components/Typography';
import {useInputFocus} from '@hooks/useInputFocus';
import {COLORS} from '@theme/ThemeColors';
import {Fonts} from '@theme/Font';

export type OrangeInputProps = TextInputProps & {
  label?: string;
  hasError?: boolean;
  containerStyle?: StyleProp<TextStyle>;
};

const LABEL_WIDTH = 200;

const getState = (cond: boolean) => (prop: 'scale' | 'translate') => {
  const open = {
    scale: 0.8,
    translate: {x: -0.2 * (LABEL_WIDTH / 2), y: -5},
  };

  const closed = {
    scale: 1,
    translate: {x: 0, y: 10},
  };

  if (prop === 'scale') {
    return cond ? open.scale : closed.scale;
  }

  if (prop === 'translate') {
    return cond ? open.translate : closed.translate;
  }

  return 0;
};

export const Input: React.FC<
  {icon: JSX.Element} & OrangeInputProps
> = props => {
  const input = useInputFocus(props);

  const focusedColor = React.useMemo(
    () =>
      input.focused ? COLORS.primary_1.Dark500 : COLORS.primary_2.greyLight100,
    [input.focused],
  );

  return (
    <Flex fullwidth>
      <Flex
        justifyContent={'center'}
        alignItems={'center'}
        pointerEvents={'none'}
        style={{
          minWidth: 50,
          position: 'absolute',
          top: 0,
          bottom: 0,
          zIndex: 2,
        }}>
        {props.icon}
      </Flex>

      <TextInput
        {...props}
        placeholder={'Search crypto'}
        onBlur={input.onBlur}
        onFocus={input.onFocus}
        style={[
          {
            paddingLeft: 50,
            fontSize: 16,
            backgroundColor: COLORS.neutral.smokeLight,
            height: 54,
            borderWidth: 1,
            width: '100%',
            borderRadius: 8,
            paddingHorizontal: 16,
            paddingVertical: 12,
            borderColor: focusedColor,
          },
          props.style,
        ]}
      />
    </Flex>
  );
};

export const FlatInput = React.forwardRef<any, OrangeInputProps>(
  (props, mainRef) => {
    const {focused, onFocus, onBlur} = useInputFocus({
      onBlur: props.onBlur,
      onFocus: props.onFocus,
    });

    const reduceLabelSize = React.useMemo(
      () => (focused ? true : !((props?.value || '').length === 0)),
      [focused, props?.value],
    );

    const animState = React.useMemo(
      () => getState(reduceLabelSize),
      [reduceLabelSize],
    );

    const scale = React.useRef(
      new Animated.Value(animState('scale') as number),
    ).current;

    const translate = React.useRef(
      // @ts-ignore
      new Animated.ValueXY(animState('translate')),
    ).current;
    const ref = React.useRef<typeof Flex>(null);

    const focusedColor = React.useMemo(
      () =>
        focused ? COLORS.success.greenDark500 : COLORS.primary_2.greyDark500,
      [focused],
    );
    const stateColor = React.useMemo(
      () => (props.hasError ? COLORS.error.redLight400 : focusedColor),
      [props.hasError, focusedColor],
    );

    useLayoutEffect(() => {
      Animated.parallel([
        Animated.timing(scale, {
          toValue: animState('scale'),
          duration: 200,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
        Animated.timing(translate, {
          toValue: animState('translate'),
          duration: 200,
          easing: Easing.linear,
          useNativeDriver: true,
        }),
      ]).start();
    }, [animState, focused, scale, translate]);

    useImperativeHandle(mainRef, () => ({
      focus() {
        ref.current.focus();
      },
    }));

    return (
      <Flex
        relative
        alignItems={'stretch'}
        pt={props?.label ? 20 : 0}
        fullwidth
        onTouchStart={() => ref.current.focus()}
        style={[
          {
            backgroundColor: COLORS.neutral.smokeLight100,
            borderBottomWidth: 1,
            borderColor: stateColor,
            borderTopLeftRadius: 6,
            borderTopRightRadius: 6,
          },
          props.containerStyle,
        ]}>
        {props?.label && (
          <Flex
            ref={ref}
            px={12}
            py={6}
            style={{position: 'absolute', left: 0, zIndex: 3}}>
            <AnimatedBaseText
              style={{
                fontSize: 16,
                width: LABEL_WIDTH,
                color: stateColor,
                transform: [
                  {scale},
                  {translateX: translate.x},
                  {translateY: translate.y},
                ],
              }}>
              {props.label}
            </AnimatedBaseText>
          </Flex>
        )}

        <TextInput
          {...props}
          ref={ref}
          onBlur={onBlur}
          onFocus={onFocus}
          style={[
            {
              borderWidth: 1,
              borderColor: 'transparent',
              maxWidth: '90%',
              height: 30,
              lineHeight: 30 / 2,
              fontFamily: Fonts.Primary.Medium,
              paddingLeft: 14,
            },
            props?.style,
          ]}
        />
      </Flex>
    );
  },
);

type InputHOC<T extends Record<string, any>, Comp = React.FC<any>> = (
  Component: Comp,
) => (a: Comp extends React.FC<infer Props> ? Props & T : T) => JSX.Element;

export const withMessage: InputHOC<{message: JSX.Element}> = (
  Component: React.FC<any>,
) =>
  function MessageWrapper(props) {
    return (
      <>
        {/*// @ts-ignore*/}
        <Component {...props} />
        {props?.message ?? null}
      </>
    );
  };

type SecureInputProps = {
  secureTextEntry?: boolean;
  toggleSecretEntry?: () => void;
};

export const withSecureInput: InputHOC<SecureInputProps> = Component =>
  function SecureWrap(props) {
    const [secured, setSecured] = React.useState(props.secureTextEntry || true);

    return (
      <Flex fullwidth style={{position: 'relative'}}>
        {/*// @ts-ignore*/}
        <Component {...props} secureTextEntry={secured} />

        <TouchableOpacity
          style={{
            height: '100%',
            justifyContent: 'center',
            paddingHorizontal: 12,
            position: 'absolute',
            right: 0,
          }}
          onPress={() => {
            setSecured(!secured);
          }}>
          {secured ? (
            <EyeLight width={20} height={20} />
          ) : (
            <EyeHideLight width={20} height={20} />
          )}
        </TouchableOpacity>
      </Flex>
    );
  };

export const SecureInput: React.FC<SecureInputProps & OrangeInputProps> =
  withSecureInput(FlatInput);

export const SecureInputWithMessage: React.FC<
  {message?: JSX.Element} & SecureInputProps & OrangeInputProps
> = withMessage(SecureInput);

export const CharInput = React.forwardRef<
  any,
  Omit<OrangeInputProps, 'label' | 'hasError'>
>((props, ref) => {
  return (
    <FlatInput
      {...props}
      // @ts-ignore
      ref={ref}
      keyboardType="numeric"
      style={{
        height: 42,
        paddingLeft: 0,
        textAlign: 'center',
        maxWidth: '100%',
      }}
      containerStyle={{
        borderTopLeftRadius: 0,
        borderTopRightRadius: 0,
        width: 36,
      }}
    />
  );
});

const AnimatedBaseText = Animated.createAnimatedComponent(BaseText);
