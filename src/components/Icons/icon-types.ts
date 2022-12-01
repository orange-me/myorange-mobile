import {SvgProps} from 'react-native-svg';

export type IconProp = SvgProps & {
  color?: string;
};

export const colorOrDefault = (value: any) => value || 'black';
