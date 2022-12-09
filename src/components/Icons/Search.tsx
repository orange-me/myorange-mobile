import * as React from 'react';
import {memo} from 'react';
import Svg, {Circle, Path} from 'react-native-svg';
import {colorOrDefault, IconProp} from '@components/Icons/icon-types';

const SvgSearch = (props: IconProp) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Circle cx={9.166} cy={9.167} r={5.833} stroke="#33363F" strokeWidth={2} />
    <Path
      d="m16.667 16.667-2.5-2.5"
      stroke={colorOrDefault(props.color)}
      strokeWidth={2}
      strokeLinecap="round"
    />
  </Svg>
);
const Memo = memo(SvgSearch);
export default Memo;
