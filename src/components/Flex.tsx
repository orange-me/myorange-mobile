import React from 'react';
// @ts-ignore
import styled, {css} from 'styled-components/native';
import {fullwidth, propOr, withProp} from './styled_helpers';
import {Animated, ViewProps} from 'react-native';

export type FlexProps = ViewProps &
  Partial<{
    pt: number;
    pl: number;
    pr: number;
    pb: number;
    py: number;
    px: number;
    mx: number;
    my: number;
    mt: number;
    mb: number;
    ml: number;
    mr: number;
    shrink: 1 | 0;
    flex: 1 | 0;
    fullwidth: boolean;
    outline: boolean;
    alignSelf: 'flex-start' | 'center' | 'flex-end';
  }>;

type Flex = React.FC<React.PropsWithChildren<FlexProps>> & {
  Row: React.FC<React.PropsWithChildren<FlexProps>>;
};

export const Flex: Flex = styled.View`
  align-items: ${propOr('alignItems', 'flex-start')};
  justify-content: ${propOr('justifyContent', 'flex-start')};

  margin-top: ${propOr('mt', 0)}px;
  margin-left: ${propOr('ml', 0)}px;
  margin-right: ${propOr('mr', 0)}px;
  margin-bottom: ${propOr('mb', 0)}px;

  ${withProp(
    'pt',
    css`
      padding-top: ${propOr('pt', 0)}px;
    `,
  )}

  ${withProp(
    'pl',
    css`
      padding-left: ${propOr('pl', 0)}px;
    `,
  )}

  ${withProp(
    'pr',
    css`
      padding-right: ${propOr('pr', 0)}px;
    `,
  )}

  ${withProp(
    'pb',
    css`
      padding-bottom: ${propOr('pb', 0)}px;
    `,
  )}

  ${withProp(
    'py',
    css`
      padding-vertical: ${propOr('py', 0)}px;
    `,
  )}

  ${withProp(
    'px',
    css`
      padding-right: ${propOr('px', 0)}px;
      padding-left: ${propOr('px', 0)}px;
    `,
  )}

  ${withProp(
    'mx',
    css`
      margin-right: ${propOr('mx', 0)}px;
      margin-left: ${propOr('mx', 0)}px;
    `,
  )}

  ${withProp(
    'my',
    css`
      margin-top: ${propOr('my', 0)}px;
      margin-bottom: ${propOr('my', 0)}px;
    `,
  )}

  ${fullwidth}

  ${withProp(
    'alignSelf',
    `
      align-self: ${propOr('alignSelf', 'flex-start')};
    `,
  )}
  
  ${withProp(
    'shrink',
    `
      flex-shrink: ${propOr('shrink', 0)};
    `,
  )}

  ${withProp(
    'outline',
    `
      border: solid 1px black;
    `,
  )}

  ${withProp(
    'flex',
    `
      flex: ${propOr('flex', 0)};
    `,
  )}
`;

Flex.Row = styled(Flex)`
  flex-direction: row;
`;

export const AnimatedFlex = Animated.createAnimatedComponent(Flex);

export default Flex;
