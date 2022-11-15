import styled from 'styled-components/native';

export const H1 = styled.Text`
  color: rgba(0, 0, 0, 1);
  letter-spacing: 2px;
  font-size: 36px;
  font-family: Roobert-Bold;
  line-height: 42px;
`;
export const H2 = styled.Text`
  color: rgba(0, 0, 0, 1);
  font-size: 28px;
  line-height: 36px;
  font-weight: 700;
  font-family: Roobert-Bold;
`;

export const H3 = styled.Text`
  color: rgba(102, 102, 102, 1);
  font-family: Roobert-Medium;
  font-size: 20px;
`;

export const Paragraph = styled.Text`
  color: 'rgba(75, 85, 99, 1)';
  font-size: 16px;
  line-height: 26px;
  font-family: Roobert-medium;
`;
// Should be used for buttons
export const Lead = styled(Paragraph)`
  font-size: 16px;
  font-weight: 700;
  font-weight: bold;
`;
