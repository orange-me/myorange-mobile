import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Login from '@screens/auth/login';

const Stack = createStackNavigator();

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
