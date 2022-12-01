import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
import {memo} from 'react';
import {colorOrDefault, IconProp} from '@components/Icons/icon-types';
const SvgCopy = (props: IconProp) => (
  <Svg
    width={24}
    height={24}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M12.5 2.5h-5a3.333 3.333 0 0 0-3.333 3.333V12.5"
      stroke={colorOrDefault(props.color)}
      strokeWidth={1.5}
    />
    <Path
      d="M7.417 9.583c0-.994 0-1.678.06-2.199.057-.506.16-.765.301-.95a1.75 1.75 0 0 1 .323-.322c.185-.142.444-.245.95-.302.521-.059 1.204-.06 2.2-.06.994 0 1.677.001 2.198.06.506.057.765.16.95.302.121.093.23.201.323.323.141.184.245.443.302.95.058.52.06 1.204.06 2.198v3.334c0 .994-.002 1.678-.06 2.199-.057.506-.16.765-.302.95-.093.12-.202.23-.323.322-.185.142-.444.245-.95.302-.52.059-1.204.06-2.199.06-.995 0-1.678-.001-2.199-.06-.506-.057-.765-.16-.95-.302a1.748 1.748 0 0 1-.323-.323c-.141-.184-.244-.443-.301-.95-.06-.52-.06-1.204-.06-2.198V9.583Z"
      stroke={colorOrDefault(props.color)}
      strokeWidth={1.5}
    />
  </Svg>
);
const Memo = memo(SvgCopy);
export default Memo;
