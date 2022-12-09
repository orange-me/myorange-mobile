import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {memo} from 'react';
const SvgPlus = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M12 6v12M18 12H6"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </Svg>
);
const Memo = memo(SvgPlus);
export default Memo;
