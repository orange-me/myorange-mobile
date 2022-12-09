import {SvgProps} from 'react-native-svg';

export type IconProp = SvgProps & {
  color?: string;
  size?: number;
};

export const colorOrDefault = (value: any, defaultColor = 'black') =>
  value || defaultColor;
