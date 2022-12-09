import {View} from 'react-native';
import React from 'react';
import {useTheme} from '@theme/ThemeContext';
import AppBar from '@screens/modals/AppBar';
import Flex from '@components/Flex';
import {BaseText, H2} from '@components/Typography';
import {Copy, SortArrow} from '@components/Icons';
import {Gutter} from '@theme/Spacing';
import {COLORS} from '@theme/ThemeColors';

const TokenReceiveDetails = ({route}) => {
  const {colors} = useTheme();
  const token = route.params?.token || {};
  const network = route.params?.network || {};

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'flex-start',
        backgroundColor: colors.neutral.white,
      }}>
      <AppBar title={''} relative={true} showBottomBar={false} />

      <Flex px={Gutter.REGULAR} pt={8} mb={12} alignItems={'center'}>
        <H2 style={{width: '100%'}}>Add {token.name}</H2>

        <Flex
          mt={36}
          mb={24}
          style={{
            width: 240,
            height: 240,
            borderRadius: 0,
            backgroundColor: COLORS.neutral.smokeLight100,
          }}
        />

        <BaseText style={{textAlign: 'center', marginBottom: 24}}>
          Scan the QR code to receive {token.name}
        </BaseText>

        <DetailList
          label={'Asset to send'}
          value={`${token.name} (${token.symbol})`}
          icon={null}
        />

        <DetailList
          label={'Network'}
          value={network.name}
          icon={<SortArrow />}
        />

        <DetailList
          label={'Wallet Address'}
          value={'0xdAC17F958D2ee523a2206...'}
          icon={<Copy />}
        />
      </Flex>
    </View>
  );
};

const DetailList: React.FC<{
  label: string;
  value: string;
  icon: JSX.Element | null;
}> = (props: any) => {
  return (
    <Flex.Row
      fullwidth
      px={12}
      py={10}
      my={4}
      alignItems={'center'}
      style={{
        borderRadius: 8,
        backgroundColor: COLORS.neutral.smokeLight100,
      }}>
      <Flex flex={1}>
        <BaseText style={{color: COLORS.neutral.smokeLight400, fontSize: 12}}>
          {props.label}
        </BaseText>
        <BaseText bold style={{marginTop: 6}}>
          {props.value}
        </BaseText>
      </Flex>
      <Flex mr={5}>{props.icon}</Flex>
    </Flex.Row>
  );
};

export default TokenReceiveDetails;
