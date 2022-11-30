// @ts-ignore
import styled, {css} from 'styled-components/native';
import {withProp} from '@components/styled_helpers';

const Fonts = {
  Primary: {
    Bold: 'Roobert-Bold',
    Medium: 'Roobert-Medium',
    Regular: 'Roobert-Regular',
  },
};

export const H1 = styled.Text`
  color: rgba(0, 0, 0, 1);
  letter-spacing: -1px;
  font-size: 36px;
  font-family: ${Fonts.Primary.Bold};
  line-height: 42px;
`;

export const H2 = styled.Text`
  color: rgba(0, 0, 0, 1);
  font-size: 28px;
  line-height: 36px;
  font-weight: 700;
  font-family: ${Fonts.Primary.Bold};
`;

export const H3 = styled.Text`
  color: rgba(102, 102, 102, 1);
  font-family: ${Fonts.Primary.Medium};
  font-size: 20px;
`;

export const Paragraph = styled.Text`
  color: 'rgba(75, 85, 99, 1)';
  font-size: 16px;
  line-height: 26px;
  font-family: ${Fonts.Primary.Medium};
`;

// Should be used for buttons
export const Lead = styled(Paragraph)`
  font-size: 16px;
  font-weight: 700;
  font-weight: bold;
`;

export const BaseText = styled.Text`
  font-family: ${Fonts.Primary.Regular};
  font-size: 16px;
  letter-spacing: -0.3px;

  ${withProp(
    'medium',
    css`
      font-family: ${Fonts.Primary.Medium};
    `,
  )}

  ${withProp(
    'bold',
    css`
      font-family: ${Fonts.Primary.Bold};
    `,
  )}
`;

export const ButtonText = styled.Text.attrs({
  allowFontScaling: false,
})`
  font-size: 16px;
  line-height: 20px;
  font-weight: 700;
  font-family: ${Fonts.Primary.Medium};

  ${withProp(
    'small',
    css`
      font-size: 16px;
      line-height: 18px;
    `,
  )}
`;
