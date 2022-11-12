import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '@screens/auth/Login';

const Stack = createStackNavigator();

console.log(Stack, 'stack');

const AuthNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="login" component={Login} />
    </Stack.Navigator>
  );
};

export default AuthNavigation;
