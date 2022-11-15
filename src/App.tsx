/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import AppNavigator from '@navigation/AppNavigator';
import {MainThemeProvider} from '@theme/ThemeContext';

const App = () => {
  return (
    <MainThemeProvider>
      <AppNavigator />
    </MainThemeProvider>
  );
};

export default App;
