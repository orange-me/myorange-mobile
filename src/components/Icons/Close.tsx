import * as React from 'react';
import {memo} from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const SvgClose = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 32 32"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M24 8 8 24M8 8l16 16"
      stroke="#33363F"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
const Memo = memo(SvgClose);
export default Memo;
