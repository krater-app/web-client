import styled from '@emotion/styled';
import { ChangeEvent } from 'react';
import { Flex, useRadioGroup } from '@chakra-ui/react';
import { RadioCard } from '../../../ui/radio-card/radio-card';

const StyledFlex = styled(Flex)`
  justify-content: center;
  align-items: center;

  & > label:nth-of-type(2n) {
    margin: 0 10px;
  }
`;

export type PostType = 'text-post' | 'link-post' | 'image-post';

interface Props {
  defaultValue?: PostType;
  onChange: (value: PostType) => void;
}

export const SelectPostType = ({
  defaultValue = 'text-post',
  onChange,
}: Props) => {
  const options = [
    {
      label: 'Text Post',
      value: 'text-post',
    },
    {
      label: 'Link Post',
      value: 'link-post',
    },
    {
      label: 'Image Post',
      value: 'image-post',
    },
  ];

  const { getRadioProps, getRootProps } = useRadioGroup({
    defaultValue,
    name: 'type',
  });

  const group = getRootProps();

  const handleRadioValueChange = (event: ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value as PostType);
  };

  return (
    <StyledFlex {...group} width="full" onChange={handleRadioValueChange}>
      {options.map(({ label, value }) => {
        const radio = getRadioProps({ value });

        return (
          <RadioCard key={value} {...radio}>
            {label}
          </RadioCard>
        );
      })}
    </StyledFlex>
  );
};
