import {SvgProps} from 'react-native-svg';

export type IconProp = SvgProps & {
  color?: string;
  size?: string;
};

export const colorOrDefault = (value: any, defaultColor = 'black') =>
  value || defaultColor;
