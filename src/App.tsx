/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect} from 'react';
import AppNavigator from '@navigation/AppNavigator';
import {MainThemeProvider} from '@theme/ThemeContext';
import SplashScreen from 'react-native-splash-screen';

const App = () => {
  useEffect(() => {
    SplashScreen.hide(); //hides the splash screen on app load.
  }, []);

  return (
    <MainThemeProvider>
      <AppNavigator />
    </MainThemeProvider>
  );
};

export default App;
