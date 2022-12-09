import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {memo} from 'react';
import {colorOrDefault, IconProp} from '@components/Icons/icon-types';
const SvgChevronRight = (props: IconProp) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 9 14"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="m1 1 6 6-6 6"
      stroke={colorOrDefault(props.color, '#6B7280')}
      strokeWidth={1.5}
    />
  </Svg>
);
const Memo = memo(SvgChevronRight);
export default Memo;
