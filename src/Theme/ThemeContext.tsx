import React, {
  createContext,
  PropsWithChildren,
  useContext,
  useMemo,
  useState,
} from 'react';
import {StatusBar} from 'react-native';
import {ThemeProvider} from 'styled-components';
import {Colors, darkModeColors, lightModeColors} from './colors';
import currentColors from './currentColors';

export const Themes = {
  DARK: 'dark',
  LIGHT: 'light',
} as const;

export type ThemesType = typeof Themes[keyof typeof Themes];

export interface ThemeContextProps {
  colors: Colors;
  darkScheme: Colors;
  lightScheme: Colors;
  colorScheme: ThemesType | null;
  isDarkMode: boolean;
  setTheme: (scheme: ThemesType) => void;
}

export const ThemeContext = createContext<ThemeContextProps>({
  colors: lightModeColors,
  colorScheme: Themes.LIGHT,
  darkScheme: darkModeColors,
  isDarkMode: false,
  lightScheme: lightModeColors,
  setTheme: () => {},
});

export const MainThemeProvider = (props: PropsWithChildren<{}>) => {
  const [colorScheme, setColorScheme] = useState<ThemesType | null>(null);
  const currentTheme = useMemo(
    () => ({
      colors: lightModeColors,
      colorScheme,
      darkScheme: darkModeColors,
      isDarkMode: false,
      lightScheme: lightModeColors,
      setTheme: (scheme: ThemesType) => {
        // Set everything here to light mode. In futurer this should be used to handle and overide the current theme based on the users default theme mode
        currentColors.theme = lightModeColors;
        StatusBar.setBarStyle('dark-content', true);
        currentColors.themedColors = lightModeColors;
        setColorScheme(scheme);
      },
    }),
    [colorScheme],
  );

  if (!colorScheme) {
    return null;
  }

  return (
    <ThemeProvider theme={currentTheme}>
      <ThemeContext.Provider value={currentTheme}>
        {props.children}
      </ThemeContext.Provider>
    </ThemeProvider>
  );
};

/**
 * Custom hook to get the theme object
 */
export const useTheme = () => useContext(ThemeContext);
