import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '@screens/Home';
import {RootRoutes} from '@navigation/routes';
import WelcomeScreen from '@screens/auth/WelcomeScreen';
import {BackupWallet} from '@screens/BackupWallet';
import {CreatePassword} from '@screens/CreatePassword';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={RootRoutes.Welcome}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name={RootRoutes.Home} component={Home} />
        <Stack.Screen name={RootRoutes.BackupWallet} component={BackupWallet} />
        <Stack.Screen
          name={RootRoutes.RestoreWallet}
          component={BackupWallet}
        />
        <Stack.Screen
          name={RootRoutes.CreatePassword}
          component={CreatePassword}
        />
        <Stack.Screen name={RootRoutes.Welcome} component={WelcomeScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
