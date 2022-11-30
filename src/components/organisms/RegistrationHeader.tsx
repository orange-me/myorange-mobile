import React from 'react';
import Flex from '@components/Flex';
import {Gutter} from '@theme/Spacing';
import {BaseText, H2} from '@components/Typography';
import {COLORS} from '@theme/ThemeColors';
import {OnboardingProgress} from '@components/molecules/OnboardingProgress';

export const RegistrationHeader: React.FC<{
  pageNumber: number;
  headingText: string;
  description: JSX.Element;
}> = ({headingText, description, pageNumber}) => {
  return (
    <>
      <OnboardingProgress active={pageNumber} />

      <Flex mt={Gutter.SMALL}>
        <H2>{headingText}</H2>

        <Flex my={4} />

        <BaseText style={{color: COLORS.neutral.smokeDark600}}>
          {description}
        </BaseText>
      </Flex>
    </>
  );
};
