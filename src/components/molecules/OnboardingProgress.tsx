import React, {useCallback} from 'react';
import {COLORS} from '@theme/ThemeColors';
import Flex from '@components/Flex';
import {Gutter} from '@theme/Spacing';

export const OnboardingProgress = ({active = 0}) => {
  const style = useCallback(
    (index: number) => ({
      height: 4,
      backgroundColor:
        index <= active
          ? COLORS.primary_1.Dark500
          : COLORS.neutral.smokeLight200,
    }),
    [active],
  );

  return (
    <Flex.Row py={12} fullwidth>
      <Flex style={style(0)} flex={1} mr={Gutter.XSMALL} />
      <Flex style={style(1)} flex={1} mx={Gutter.XSMALL} />
      <Flex style={style(2)} flex={1} mx={Gutter.XSMALL} />
      <Flex style={style(3)} flex={1} ml={Gutter.XSMALL} />
    </Flex.Row>
  );
};
