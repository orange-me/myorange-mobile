import {FlatList, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {useTheme} from '@theme/ThemeContext';
import AppBar from '@screens/modals/AppBar';
import Flex from '@components/Flex';
import {BaseText} from '@components/Typography';
import {ChevronRight, Search} from '@components/Icons';
import {Gutter} from '@theme/Spacing';
import {COLORS} from '@theme/ThemeColors';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {ModalRoutes} from '@navigation/routes';
import {Input} from '@components/FlatInput';

const AddCrypto = ({navigation}) => {
  const {colors} = useTheme();
  const inset = useSafeAreaInsets();

  return (
    <View
      style={{
        flex: 1,
        paddingTop: inset.top - 10,
        justifyContent: 'flex-start',
        backgroundColor: colors.neutral.white,
      }}>
      <AppBar title={'Add Crypto'} relative={true} />

      <Flex px={Gutter.REGULAR} mt={12}>
        <Input
          icon={<Search color={'#33363F'} />}
          placeholder={'Search crypto'}
        />
      </Flex>

      <FlatList
        contentContainerStyle={{
          paddingTop: 12,
          paddingBottom: inset.bottom,
        }}
        data={Array(40)
          .fill([
            {
              symbol: 'ETH',
              name: 'Ethereum',
              multichain: true,
            },
            {
              symbol: 'BTC',
              name: 'Bitcoin',
              multichain: false,
            },
          ])
          .flatMap(e => e)}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate(ModalRoutes.SelectNetwork, {
                token: item,
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
                  {item.symbol}
                </BaseText>
                <BaseText
                  style={{
                    fontSize: 12,
                    marginTop: 2,
                    color: COLORS.neutral.smokeDark500,
                  }}>
                  {item.name}
                </BaseText>
              </Flex>
              {item.multichain && (
                <Flex
                  mr={12}
                  style={{
                    backgroundColor: COLORS.neutral.smokeLight100,
                    paddingHorizontal: 8,
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

export default AddCrypto;
