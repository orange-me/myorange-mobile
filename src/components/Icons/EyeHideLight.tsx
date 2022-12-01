import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {memo} from 'react';
import {colorOrDefault, IconProp} from '@components/Icons/icon-types';

const SvgEyeHideLight = (props: IconProp) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M13.314 10.36A3.333 3.333 0 0 0 9.64 6.685l3.674 3.673ZM7.088 8.375a3.333 3.333 0 0 0 4.536 4.536l-1.143-1.143a1.834 1.834 0 0 1-2.25-2.25L7.087 8.375Z"
      fill={colorOrDefault(props.color)}
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="m13.48 14.768-1.112-1.112c-.757.368-1.555.594-2.368.594-1.245 0-2.455-.53-3.538-1.285-1.078-.75-1.972-1.683-2.57-2.39-.21-.248-.31-.37-.371-.47-.038-.063-.038-.08-.038-.103v-.004c0-.023 0-.04.038-.103.06-.1.161-.222.371-.47A14.463 14.463 0 0 1 6.05 7.338L4.981 6.269a16.131 16.131 0 0 0-2.233 2.186l-.068.08c-.325.38-.697.816-.697 1.465 0 .649.372 1.084.697 1.465l.068.08c.644.761 1.633 1.799 2.857 2.65 1.218.85 2.727 1.555 4.395 1.555 1.272 0 2.451-.41 3.48-.982ZM7.655 4.701A6.596 6.596 0 0 1 10 4.25c1.667 0 3.176.705 4.395 1.554 1.223.852 2.213 1.89 2.857 2.651l.068.08c.325.38.697.816.697 1.465 0 .649-.372 1.084-.697 1.465l-.068.08c-.35.414-.803.91-1.34 1.413l-1.061-1.062a15.52 15.52 0 0 0 1.256-1.32c.21-.249.311-.372.372-.47.038-.064.038-.081.038-.104v-.004c0-.023 0-.04-.038-.103-.06-.1-.162-.222-.372-.47-.598-.707-1.492-1.64-2.57-2.39C12.455 6.281 11.245 5.75 10 5.75c-.388 0-.772.051-1.15.145L7.655 4.701Z"
      fill={colorOrDefault(props.color)}
    />
    <Path
      d="M4.167 1.667 17.5 15"
      stroke={colorOrDefault(props.color)}
      strokeWidth={1.5}
    />
  </Svg>
);
const Memo = memo(SvgEyeHideLight);
export default Memo;
