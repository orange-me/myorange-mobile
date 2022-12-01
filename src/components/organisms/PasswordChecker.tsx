import {StyleSheet} from 'react-native';
import {COLORS} from '@theme/ThemeColors';
import React from 'react';
import Flex from '@components/Flex';
import {BaseText} from '@components/Typography';
import {OnboardingProgress} from '@components/molecules/OnboardingProgress';

const styles = StyleSheet.create({
  text: {fontSize: 14, color: COLORS.neutral.smokeDark500},
});

export const PasswordChecker: React.FC<{value: string}> = ({value}) => {
  const [status, setStatus] = React.useState<'Weak' | 'Strong'>('Weak');

  const statusConfig = React.useMemo(
    () =>
      ({
        Strong: {
          active: 3,
          color: COLORS.success.greenDark500,
        },
        Weak: {
          active: 1,
          color: COLORS.warning.yellowDark500,
        },
      }[status]),
    [status],
  );

  React.useEffect(() => {
    setStatus(/password/.test(value) ? 'Strong' : 'Weak');
  }, [value]);

  return (
    <Flex alignItems={'stretch'} fullwidth>
      <Flex.Row justifyContent={'space-between'} alignItems={'flex-end'}>
        <BaseText style={styles.text}>Password strength</BaseText>
        <BaseText bold style={styles.text}>
          {status}
        </BaseText>
      </Flex.Row>

      <Flex pt={8}>
        <OnboardingProgress
          slideCount={3}
          gutter={3}
          slideHeight={2}
          {...statusConfig}
        />
      </Flex>
    </Flex>
  );
};
