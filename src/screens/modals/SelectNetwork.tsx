import {FlatList, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useTheme} from '@theme/ThemeContext';
import AppBar from '@screens/modals/AppBar';
import Flex from '@components/Flex';
import {BaseText} from '@components/Typography';
import {ArrowRight, ChevronRight} from '@components/Icons';
import {Gutter} from '@theme/Spacing';
import {COLORS} from '@theme/ThemeColors';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ModalRoutes} from '@navigation/routes';

const SelectNetwork = ({navigation, route}) => {
  const {colors} = useTheme();
  const inset = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: colors.neutral.white,
      }}>
      <AppBar
        title={'Select network'}
        relative={true}
        icon={
          <Flex style={{transform: [{rotate: '180deg'}]}}>
            <ArrowRight
              width={24}
              height={24}
              color={COLORS.neutral.smokeDark900}
            />
          </Flex>
        }
      />

      <FlatList
        contentContainerStyle={{
          paddingTop: 12,
          paddingBottom: inset.bottom,
        }}
        data={[
          {
            name: 'Ethereum',
          },
          {
            name: 'Binance Smart Chain',
          },
          {
            name: 'Polygon',
          },
          {
            name: 'Avalanche',
          },
          {
            name: 'Optimism',
          },
          {
            name: 'Cronos',
          },
        ]}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.replace(ModalRoutes.TokenReceiveDetails, {
                token: route.params.token,
                network: item,
              })
            }>
            <Flex.Row
              key={index}
              alignItems={'center'}
              fullwidth
              py={10}
              px={Gutter.REGULAR}>
              <Flex
                style={{
                  width: 36,
                  borderRadius: 36,
                  height: 36,
                  backgroundColor: COLORS.neutral.smokeLight200,
                }}
              />
              <Flex flex={1} mx={8}>
                <BaseText bold style={{color: COLORS.neutral.smokeDark700}}>
                  {item.name}
                </BaseText>
              </Flex>
              {item.multichain && (
                <Flex
                  mr={12}
                  style={{
                    backgroundColor: COLORS.neutral.smokeLight100,
                    paddingHorizontal: 4,
                    paddingVertical: 2,
                    borderRadius: 3,
                  }}>
                  <BaseText
                    style={{fontSize: 12, color: COLORS.neutral.smokeDark600}}>
                    Multi-network
                  </BaseText>
                </Flex>
              )}

              <ChevronRight width={16} height={16} />
            </Flex.Row>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default SelectNetwork;
