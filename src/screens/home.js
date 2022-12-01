
import { View, Text, Button, TouchableOpacity } from "react-native";
import React from 'react';
import {useTheme} from '@theme/ThemeContext';
// import {generateMnemonic} from '@infrastructure/wallet';
import multichainWallet from 'multichain-crypto-wallet';
import {Lead} from '@components/Typography';

const Home = () => {
  // const generate = () => {
  //   console.log('got here');
  //   const mnemonic = multichainWallet.generateMnemonic();
  //   console.log(mnemonic);
  // };

  const {colors} = useTheme();
  return (
    <View
      style={{
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.primary_1.orangeDark600,
      }}>
      <Lead style={{color: colors.primary_2.greyLight}}>
        Your Keys, your coins
      </Lead>
      <TouchableOpacity>
        <Text style={{color: colors.primary_2.greyLight}}>
          Generate Mnemonic
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
