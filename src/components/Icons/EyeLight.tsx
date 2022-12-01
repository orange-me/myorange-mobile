import * as React from 'react';
import Svg, {SvgProps, Path, Circle} from 'react-native-svg';
import {memo} from 'react';
const SvgEyeLight = (props: SvgProps) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M10 4.167c-4.403 0-6.907 3.324-7.87 4.953-.224.378-.335.567-.324.862.012.295.142.48.403.85 1.136 1.61 3.98 5.001 7.791 5.001 3.812 0 6.655-3.39 7.791-5.002.26-.369.391-.554.403-.849.012-.295-.1-.484-.323-.862-.963-1.63-3.467-4.953-7.87-4.953Z"
      stroke="#222"
      strokeWidth={1.5}
    />
    <Circle cx={10} cy={10} r={2.5} stroke="#222" strokeWidth={1.5} />
  </Svg>
);
const Memo = memo(SvgEyeLight);
export default Memo;
