import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import AuthNavigation from '@navigation/AuthNavigation';
import Home from '@screens/Home';
const Stack = createStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        // initialRouteName="auth"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Auth" component={AuthNavigation} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
