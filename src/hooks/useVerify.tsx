import React, {useRef, useState} from 'react';
import useEvent from 'react-use-event-hook';
import Clipboard from '@react-native-clipboard/clipboard';

export const useVerify = ({length = 5}) => {
  const initialValue = React.useRef(Array(length).fill('')).current;
  const mainWidthRef = useRef(40.66); // 61

  const inputRef = useRef<any>([]);
  const [inputNumbers, setInputNumbers] = useState(initialValue);

  const [activeCountDownTimer, setActiveCountDownTimer] = useState(false);

  const focusOn = useEvent((index: number) => {
    if (inputRef.current[index]?.focus) return inputRef.current[index].focus();

    if (index >= inputRef.current.length || index < -1)
      return console.log('Pointer outside area');

    return console.warn('Unable to focus on the next/prev input');
  });

  const checkIsCodePasted = async (text: string) => {
    if (text.length <= 2) return false;

    const copiedContent = await Clipboard.getString();
    const isPasted = text.length > 3 && text.includes(copiedContent);
    if (isPasted) {
      const copiedContentList = text.split('');
      setInputNumbers(copiedContentList);
    }
    return isPasted;
  };
  const updateInputs = useEvent((text: string, index: number) => {
    let newArr = [...inputNumbers]; // copying the old data array
    newArr[index] = text; //key and value
    setInputNumbers(newArr);
  });

  const checkerFormatAndLengthForInputs = async (input: string) => {
    let response = await checkIsCodePasted(input);
    return (
      Boolean(!response) &&
      Boolean(input.length <= 1 && /^(\s*|\d+)$/.test(input))
    );
  };

  const updateInput = useEvent(async (text: string, index: number) => {
    let response = await checkerFormatAndLengthForInputs(text);
    if (!response) {
      return;
    }

    updateInputs(text, index);
    if (text.length === 1 && index !== 5) focusOn(index + 1);
  });

  const onResetItems = useEvent(() => {
    setInputNumbers(initialValue);
    setActiveCountDownTimer(true);
  });

  const register = React.useCallback(
    (index: number) => ({
      key: 'pin-' + index,
      ref: (ref: any) => {
        if (index > length - 1)
          return console.warn(
            '[useVerify] Registered inputs are over the allocated length',
          );
        inputRef.current[index] = ref;
      },
      value: inputNumbers[index],
      onChangeText: (text: string) => updateInput(text, index),
      onKeyPress: ({nativeEvent}: any) => {
        if (!nativeEvent) {
          return null;
        }
        if (nativeEvent.key === 'Backspace' && index !== 0) {
          if (inputNumbers[index] === '') {
            focusOn(index - 1);
            updateInputs('', index - 1);
          }
        }
      },
    }),
    [focusOn, inputNumbers, length, updateInput, updateInputs],
  );

  const isValid = React.useMemo(
    () => inputNumbers.every(e => e !== ''),
    [inputNumbers],
  );

  return {
    updateInput,
    activeCountDownTimer,
    mainWidthRef,
    register,
    inputNumbers,
    isValid,
    updateInputs,
    onResetItems,
  };
};
