import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {memo} from 'react';
const SvgArrowRight = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="m16.667 10 .707-.707.707.707-.707.707-.707-.707Zm-12.5 1a1 1 0 1 1 0-2v2Zm8.207-6.707 5 5-1.414 1.414-5-5 1.414-1.414Zm5 6.414-5 5-1.414-1.414 5-5 1.414 1.414Zm-.707.293h-12.5V9h12.5v2Z"
      fill="#fff"
    />
  </Svg>
);
const Memo = memo(SvgArrowRight);
export default Memo;
