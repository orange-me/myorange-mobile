import {Image, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';
import {useTheme} from '@theme/ThemeContext';
import {BaseText, H1} from '@components/Typography';
import Flex from '@components/Flex';
import {COLORS} from '@theme/ThemeColors';
import {Gutter} from '@theme/Spacing';
import {CircleRightAlt, ExpandLeft, Plus, Return} from '@components/Icons';
import {Eye} from '@components/atoms/Eye';
import {BlurBox} from '@components/molecules/BlurBox';
import * as Button from '@components/Button';
import {RootRoutes} from '@navigation/routes';

const Home = ({navigation}) => {
  const {colors} = useTheme();
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: colors.neutral.white,
      }}>
      <Header />

      <Flex px={Gutter.REGULAR} pt={12}>
        <PortfolioCard />
      </Flex>

      <Flex mt={32} px={Gutter.REGULAR} alignItems={'center'}>
        <Flex fullwidth mb={24}>
          <BaseText bold style={{fontSize: 20}}>
            Crypto
          </BaseText>
        </Flex>

        <Image
          source={require('../assets/images/empty-list.png')}
          style={{width: 96, height: 96}}
        />

        <Flex mt={16} mb={24}>
          <BaseText style={{textAlign: 'center', lineHeight: 20}}>
            Your wallet is empty, add some {'\n'} crypto to get started
          </BaseText>
        </Flex>

        <Button.Primary
          text={'Add crypto'}
          rounded
          style={{minWidth: 260}}
          onPress={() => navigation.navigate(RootRoutes.AddCrypto)}
        />
      </Flex>
    </SafeAreaView>
  );
};

const Header = () => {
  return (
    <Flex.Row
      pt={4}
      pb={12}
      alignItems={'center'}
      px={Gutter.REGULAR}
      style={{backgroundColor: COLORS.neutral.white}}
      fullwidth>
      <Flex.Row flex={1}>
        <Flex
          mr={8}
          style={{
            width: 40,
            borderRadius: 40,
            height: 40,
            backgroundColor: COLORS.neutral.smokeLight200,
          }}
        />
        <Flex>
          <BaseText medium style={{fontSize: 14}}>
            Mega Portfolio
          </BaseText>
          <Flex mt={2} />
          <BaseText style={{fontSize: 12}}>0xb79...y6gw</BaseText>
        </Flex>
      </Flex.Row>

      <Flex.Row
        alignItems={'center'}
        px={4}
        py={4}
        style={{
          borderRadius: 24,
          borderColor: COLORS.neutral.smokeLight200,
          borderWidth: 1,
        }}>
        <Flex
          mr={4}
          style={{
            width: 25,
            borderRadius: 25,
            height: 25,
            backgroundColor: COLORS.neutral.smokeLight200,
          }}
        />

        <BaseText medium style={{fontSize: 14, marginRight: 4}}>
          Ethereum
        </BaseText>

        <Flex style={{transform: [{rotate: '-90deg'}]}}>
          <ExpandLeft width={12} height={12} />
        </Flex>
      </Flex.Row>
    </Flex.Row>
  );
};

const PortfolioCard = () => {
  const {price, priceMargin} = {
    price: '$12,007.61',
    priceMargin: '+12.36% (1D)',
  };
  const [showPrice, setShowPrice] = React.useState(true);
  const actions = React.useRef([
    {
      text: 'Send',
      icon: (props: any) => (
        <Flex style={{transform: [{rotate: '180deg'}]}}>
          <Return {...props} />
        </Flex>
      ),
    },
    {text: 'Receive', icon: Return},
    {text: 'Swap', icon: CircleRightAlt},
    {text: 'Buy', icon: Plus},
  ]).current;

  return (
    <Flex
      fullwidth
      alignItems={'center'}
      py={32}
      px={32}
      style={{
        backgroundColor: COLORS.neutral.white,
        borderColor: COLORS.neutral.smokeLight100,
        borderWidth: 1,
        shadowColor: '#9CA3AF1A',
        shadowOffset: {x: 0, y: 2},
        shadowOpacity: 0.1,
        shadowRadius: 20,
        borderRadius: 8,
      }}>
      <TouchableOpacity
        onPress={() => requestAnimationFrame(() => setShowPrice(!showPrice))}>
        <Flex.Row>
          <BaseText style={{fontSize: 14, marginRight: 4}}>
            Wallet balance
          </BaseText>
          <Eye state={showPrice} size={16} />
        </Flex.Row>
      </TouchableOpacity>

      <BlurBox state={!showPrice} contentContainerStyle={{width: '100%'}}>
        <H1 style={{marginBottom: 8}}>{price}</H1>
        <BaseText
          medium
          style={{fontSize: 14, color: COLORS.success.greenDark500}}>
          {priceMargin}
        </BaseText>
      </BlurBox>

      <Flex.Row justifyContent={'space-between'} fullwidth mt={28} style={{}}>
        {actions.map(e => (
          <Flex key={e.text} flex={1} alignItems={'center'}>
            <TouchableOpacity onPress={() => console.log('Pressed ' + e.text)}>
              <Flex
                mb={2}
                justifyContent={'center'}
                alignItems={'center'}
                style={{
                  width: 48,
                  borderRadius: 48,
                  height: 48,
                  backgroundColor: COLORS.neutral.smokeLight100,
                }}>
                <e.icon width={24} height={24} color={COLORS.neutral.black} />
              </Flex>
            </TouchableOpacity>
            <BaseText style={{fontSize: 14}}>{e.text}</BaseText>
          </Flex>
        ))}
      </Flex.Row>
    </Flex>
  );
};

export default Home;
