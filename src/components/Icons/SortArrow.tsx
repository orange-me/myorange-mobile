import * as React from 'react';
import {memo} from 'react';
import Svg, {Path, SvgProps} from 'react-native-svg';

const SvgSortArrow = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="m2 16-.53.53L.94 16l.53-.53L2 16Zm15-.75a.75.75 0 0 1 0 1.5v-1.5ZM6.47 21.53l-5-5 1.06-1.06 5 5-1.06 1.06Zm-5-6.06 5-5 1.06 1.06-5 5-1.06-1.06Zm.53-.22h15v1.5H2v-1.5ZM22 8l.53.53.53-.53-.53-.53L22 8ZM7 7.25a.75.75 0 0 0 0 1.5v-1.5Zm10.53 6.28 5-5-1.06-1.06-5 5 1.06 1.06Zm5-6.06-5-5-1.06 1.06 5 5 1.06-1.06ZM22 7.25H7v1.5h15v-1.5Z"
      fill="#33363F"
    />
  </Svg>
);
const Memo = memo(SvgSortArrow);
export default Memo;
