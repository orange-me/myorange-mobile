import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {memo} from 'react';
const SvgCircleRightAlt = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path d="m10 11 4 4-4 4" stroke="#000" strokeWidth={2} />
    <Path
      d="M9.67 6.153c-2.108.283-3.94.94-5.153 1.847-1.213.908-1.725 2.005-1.44 3.087.285 1.083 1.347 2.076 2.989 2.796C7.708 14.603 9.816 15 12 15M19.794 12.75c.591-.512.975-1.077 1.129-1.663.154-.585.076-1.18-.23-1.752-.306-.57-.833-1.106-1.553-1.574-.72-.47-1.616-.863-2.64-1.158"
      stroke="#000"
      strokeWidth={2}
      strokeLinecap="round"
    />
  </Svg>
);
const Memo = memo(SvgCircleRightAlt);
export default Memo;
