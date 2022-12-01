import * as React from 'react';
import Svg, {SvgProps, Rect, G, Path, Defs, ClipPath} from 'react-native-svg';
import {memo} from 'react';
const SvgCheckboxChecked = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Rect x={0.6} y={0.6} width={14.8} height={14.8} rx={2.6} fill="#000" />
    <G clipPath="url(#checkbox-checked_svg__a)">
      <Path
        d="m4.267 8 2.666 2.667 5.334-5.334"
        stroke="#fff"
        strokeWidth={1.2}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </G>
    <Rect
      x={0.6}
      y={0.6}
      width={14.8}
      height={14.8}
      rx={2.6}
      stroke="#003585"
      strokeWidth={1.2}
    />
    <Defs>
      <ClipPath id="checkbox-checked_svg__a">
        <Path
          fill="#fff"
          transform="translate(1.6 1.6)"
          d="M0 0h12.8v12.8H0z"
        />
      </ClipPath>
    </Defs>
  </Svg>
);
const Memo = memo(SvgCheckboxChecked);
export default Memo;
