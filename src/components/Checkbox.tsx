import React, {useImperativeHandle} from 'react';
import {TouchableOpacity} from 'react-native';
import {CheckboxChecked, CheckboxUnchecked} from '@components/Icons';

export const Checkbox = React.forwardRef<
  any,
  {size?: number; value: boolean; onPress: () => void}
>(({size = 16, value = false, onPress}, ref) => {
  useImperativeHandle(ref, () => ({
    press: () => onPress(),
  }));

  return (
    <TouchableOpacity onPress={onPress}>
      {value ? (
        <CheckboxChecked width={size} height={size} />
      ) : (
        <CheckboxUnchecked width={size} height={size} />
      )}
    </TouchableOpacity>
  );
});
