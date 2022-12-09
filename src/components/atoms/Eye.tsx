import React from 'react';
import {IconProp} from '@components/Icons/icon-types';
import {EyeHideLight, EyeLight} from '@components/Icons';

export const Eye: React.FC<{state: boolean} & IconProp> = ({state, size}) => {
  return state ? (
    <EyeLight width={size} height={size} />
  ) : (
    <EyeHideLight width={size} height={size} />
  );
};
