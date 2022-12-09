import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {memo} from 'react';
const SvgReturn = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path fill="#F3F4F6" d="M24 24H0V0h24z" />
    <Path
      d="m4 14-.707-.707-.707.707.707.707L4 14Zm17-8a1 1 0 1 0-2 0h2ZM8.293 8.293l-5 5 1.414 1.414 5-5-1.414-1.414Zm-5 6.414 5 5 1.414-1.414-5-5-1.414 1.414ZM4 15h10v-2H4v2Zm17-7V6h-2v2h2Zm-7 7a7 7 0 0 0 7-7h-2a5 5 0 0 1-5 5v2Z"
      fill="#000"
    />
  </Svg>
);
const Memo = memo(SvgReturn);
export default Memo;
