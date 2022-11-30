/**
 * This file contains helpers for the StyledComponent library for ReactJS.
 * Styled components helpers
 */
import {path} from 'lodash/fp';
import {curry, split} from 'ramda';
import {Platform} from 'react-native';
import {css} from 'styled-components/native';

export const fullwidth = a => {
  return a.fullwidth
    ? css`
        width: 100%;
      `
    : '';
};

export const fetchPropFromTheme = themeProp => val => {
  return path(['theme', themeProp, val]);
};
export const colors = fetchPropFromTheme('colors');
export const gutter = fetchPropFromTheme('gutter');

export const platform = (android, ios) => {
  return Platform.OS === 'android' ? android : ios;
};

export const propIs = curry((prop, functor, style, props) =>
  functor(props[prop]) ? style : '',
);

export const withProp = curry((key, style, props) => {
  return propIs(key, e => !!e, style, props);
});

// helps set a default value for a StyleComponent property
export const propOr = (prop, defValue) => props => props[prop] || defValue;

// gets a nested property value. Used for a StyleComponent css properties
export const theme = strPath => path(['theme', ...split('.', strPath)]);
