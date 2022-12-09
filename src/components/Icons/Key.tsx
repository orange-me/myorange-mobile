import * as React from 'react';
import Svg, {SvgProps, Circle, Path} from 'react-native-svg';
import {memo} from 'react';
const SvgKey = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Circle cx={9} cy={14} r={4} stroke="#FF6D3B" strokeWidth={2} />
    <Path
      d="m12 11 3.5-3.5M17 6l-1.5 1.5m0 0L18 10"
      stroke="#FF6D3B"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </Svg>
);
const Memo = memo(SvgKey);
export default Memo;
