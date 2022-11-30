import {View} from 'react-native';
import React from 'react';
import {useTheme} from '@theme/ThemeContext';
import {Lead} from '@components/Typography';

const Home = () => {
  const {colors} = useTheme();
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: colors.primary_1.Dark500,
      }}>
      <Lead style={{color: colors.primary_2.greyLight}}>
        Your Keys, your coins
      </Lead>
    </View>
  );
};

export default Home;
