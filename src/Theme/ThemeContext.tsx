import React, {createContext, PropsWithChildren, useContext} from 'react';
import {ThemeProvider} from 'styled-components';
import ThemeColors from './ThemeColors';

export const Themes = {
  DARK: 'dark',
  LIGHT: 'light',
} as const;

export type ThemesType = typeof Themes[keyof typeof Themes];

export const ThemeContext = createContext(ThemeColors);

export const MainThemeProvider = (props: PropsWithChildren<{}>) => {
  return (
    <ThemeProvider theme={ThemeContext}>
      <ThemeContext.Provider value={ThemeColors}>
        {props.children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};

/**
 * Custom hook to get the theme object
 */
export const useTheme = () => useContext(ThemeContext);
