import {NativeSyntheticEvent, TextInputFocusEventData} from 'react-native';
import {useState} from 'react';

type InputEvent = NativeSyntheticEvent<TextInputFocusEventData>;

export function useInputFocus(props: {
  onFocus?: (e: InputEvent) => void;
  onBlur?: (e: InputEvent) => void;
}) {
  const [focused, setFocus] = useState(false);
  const toggleFocus = (f: boolean) => !f;

  const onBlur = (e: InputEvent) => {
    props.onBlur && props.onBlur(e);
    setFocus(toggleFocus);
  };

  const onFocus = (e: InputEvent) => {
    props.onFocus && props.onFocus(e);
    setFocus(toggleFocus);
  };

  return {
    focused,
    onBlur,
    onFocus,
  };
}
