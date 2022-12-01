import React from 'react';
import {COLORS} from '@theme/ThemeColors';
import Flex from '@components/Flex';

export const OnboardingProgress: React.FC<{
  active: number;
  slideCount?: number;
  color?: string;
  slideHeight?: number;
  gutter?: number;
}> = ({
  active = 0,
  color = COLORS.primary_1.Dark500,
  slideHeight = 4,
  slideCount = 4,
  gutter = 6,
}) => {
  const arr = React.useRef(Array.from(Array(slideCount))).current;
  const style = React.useCallback(
    (index: number) => ({
      height: slideHeight,
      backgroundColor: index <= active ? color : COLORS.neutral.smokeLight200,
    }),
    [active, color, slideHeight],
  );

  return (
    <Flex.Row fullwidth>
      {arr.map((e, index) => {
        if (index === 0)
          return (
            <Flex key={index} style={style(index + 1)} flex={1} mr={gutter} />
          );

        if (index === arr.length - 1)
          return (
            <Flex key={index} style={style(index + 1)} flex={1} ml={gutter} />
          );

        return (
          <Flex key={index} style={style(index + 1)} flex={1} mx={gutter} />
        );
      })}
    </Flex.Row>
  );
};
