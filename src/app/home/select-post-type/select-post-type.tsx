import styled from '@emotion/styled';
import { Flex, useRadioGroup } from '@chakra-ui/react';
import { RadioCard } from '../../../ui/radio-card/radio-card';

const StyledFlex = styled(Flex)`
  & > label:nth-child(2n) {
    margin: 0 10px;
  }
`;

export const SelectPostType = () => {
  const options = ['Text Post', 'Link Post', 'Image Post'];

  const { getRadioProps, getRootProps } = useRadioGroup({
    name: 'type',
    defaultValue: options[0],
  });

  const group = getRootProps();

  return (
    <StyledFlex {...group} width="full">
      {options.map((option) => {
        const radio = getRadioProps({ value: option });

        return (
          <RadioCard key={option} {...radio}>
            {option}
          </RadioCard>
        );
      })}
    </StyledFlex>
  );
};
