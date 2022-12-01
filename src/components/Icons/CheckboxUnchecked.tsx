import * as React from 'react';
import Svg, {SvgProps, Rect} from 'react-native-svg';
import {memo} from 'react';
const SvgCheckboxUnchecked = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Rect x={0.6} y={0.6} width={14.8} height={14.8} rx={2.6} fill="#fff" />
    <Rect
      x={0.6}
      y={0.6}
      width={14.8}
      height={14.8}
      rx={2.6}
      stroke="#D3D5DA"
      strokeWidth={1.2}
    />
  </Svg>
);
const Memo = memo(SvgCheckboxUnchecked);
export default Memo;
