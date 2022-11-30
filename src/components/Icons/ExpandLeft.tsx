import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {memo} from 'react';
import {colorOrDefault, IconProp} from '@components/Icons/icon-types';

const SvgExpandLeft = (props: IconProp) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="m7.5 10-.53-.53-.53.53.53.53.53-.53Zm4.47-5.53-5 5 1.06 1.06 5-5-1.06-1.06Zm-5 6.06 5 5 1.06-1.06-5-5-1.06 1.06Z"
      fill={colorOrDefault(props.color)}
    />
  </Svg>
);
const Memo = memo(SvgExpandLeft);
export default Memo;
