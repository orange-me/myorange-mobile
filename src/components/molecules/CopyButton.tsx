import React from 'react';
import {TouchableOpacity} from 'react-native';
import Flex from '@components/Flex';
import {Copy, CopyFill} from '@components/Icons';
import {BaseText} from '@components/Typography';
import {COLORS} from '@theme/ThemeColors';

export const CopyButton: React.FC<{onPress: () => void}> = ({onPress}) => {
  const ref = React.useRef<null | NodeJS.Timeout>(null);
  const [coloured, setColoured] = React.useState(false);

  const handlePress = React.useCallback(() => {
    setColoured(true);

    if (ref.current === null)
      ref.current = setTimeout(() => {
        setColoured(false);
        ref.current = null;
      }, 2000);

    onPress();
  }, [onPress]);

  return (
    <TouchableOpacity onPress={handlePress}>
      <Flex.Row>
        {!coloured ? (
          <>
            <Copy width={20} height={20} />
            <BaseText style={{fontSize: 14, marginLeft: 4}}>Copy</BaseText>
          </>
        ) : (
          <>
            <CopyFill
              color={COLORS.success.greenDark500}
              width={20}
              height={20}
            />
            <BaseText
              style={{
                fontSize: 14,
                marginLeft: 4,
                color: COLORS.success.greenDark500,
              }}>
              Copied
            </BaseText>
          </>
        )}
      </Flex.Row>
    </TouchableOpacity>
  );
};
