import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import WelcomeScreen from '@screens/auth/WelcomeScreen';

const Stack = createStackNavigator();

console.log(Stack, 'stack');

const AuthNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="login" component={WelcomeScreen} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
