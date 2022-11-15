import {View, Text} from 'react-native';
import React from 'react';
import {useTheme} from '@theme/ThemeContext';
import {Lead} from '@components/Typography';

const Home = () => {
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
    </View>
  );
};

export default Home;
