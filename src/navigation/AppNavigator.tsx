import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Home from '@screens/Home';
import {ModalRoutes, RootRoutes} from '@navigation/routes';
import WelcomeScreen from '@screens/auth/WelcomeScreen';
import {BackupWallet} from '@screens/BackupWallet';
import {CreatePassword} from '@screens/CreatePassword';
import {EnterPin} from '@screens/EnterPin';
import {NameWallet} from '@screens/NameWallet';
import {RestoreWallet} from '@screens/RestoreWallet';
import {SelectWallet} from '@screens/SelectWallet';
import AddCrypto from '@screens/modals/AddCrypto';
import SelectNetwork from '@screens/modals/SelectNetwork';
import TokenReceiveDetails from '@screens/modals/TokenReceiveDetails';

const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName={RootRoutes.Home}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Group>
          <Stack.Screen name={RootRoutes.Home} component={Home} />
          <Stack.Screen
            name={RootRoutes.BackupWallet}
            component={BackupWallet}
          />
          <Stack.Screen
            name={RootRoutes.RestoreWallet}
            component={RestoreWallet}
          />
          <Stack.Screen
            name={RootRoutes.SelectWallet}
            component={SelectWallet}
          />
          <Stack.Screen
            name={RootRoutes.CreatePassword}
            component={CreatePassword}
          />
          <Stack.Screen name={RootRoutes.NameWallet} component={NameWallet} />
          <Stack.Screen name={RootRoutes.EnterPin} component={EnterPin} />
          <Stack.Screen name={RootRoutes.Welcome} component={WelcomeScreen} />
          <Stack.Screen name={RootRoutes.AddCrypto} component={AddCrypto} />
        </Stack.Group>

        <Stack.Group screenOptions={{presentation: 'modal'}}>
          <Stack.Screen
            name={ModalRoutes.SelectNetwork}
            component={SelectNetwork}
          />
          <Stack.Screen
            name={ModalRoutes.TokenReceiveDetails}
            component={TokenReceiveDetails}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default AppNavigator;
