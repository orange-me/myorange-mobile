import {View, Text} from 'react-native';
import React from 'react';
import {useTheme} from '@theme/ThemeContext';

const Home = () => {
  const {colors} = useTheme();
  console.log(colors.primary_1.orangeLight);
  return (
    <View
      style={{
        justifyContent: 'center',
        flex: 1,
        alignItems: 'center',
        backgroundColor: colors.primary_1.orangeLight400,
      }}>
      <Text>Hello from home</Text>
    </View>
  );
};

export default Home;
