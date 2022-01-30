import { ArrowDownIcon, ArrowUpIcon, ChatIcon } from '@chakra-ui/icons';
import {
  Button,
  Container,
  Flex,
  Heading,
  Text,
  VStack,
} from '@chakra-ui/react';
import { DateTime } from 'luxon';

interface Props {
  id: string;
  comments: number;
  content: string | null;
  createdAt: string;
  createdBy: string;
  likes: number;
  tags: string[];
  title: string | null;
}

export const TextPostItem = ({
  comments,
  content,
  createdAt,
  createdBy,
  likes,
  title,
}: Props) => {
  return (
    <Container
      width="full"
      maxW="container.lg"
      p={5}
      bg="gray.900"
      borderRadius="md"
    >
      <VStack spacing={5} align="stretch">
        <Flex width="full" alignItems="center" justifyContent="space-between">
          <Text>By {createdBy}</Text>
          <Text>{DateTime.fromISO(createdAt).toRelative()}</Text>
        </Flex>
        {title && (
          <Heading fontSize="lg" fontWeight="semibold">
            {title}
          </Heading>
        )}
        <Text>{content}</Text>
        <Flex w="full" justifyContent="space-between" alignItems="center">
          <Button>
            {comments} <ChatIcon ml={3} />
          </Button>
          <Flex alignItems="center">
            <Button>
              <ArrowUpIcon />
            </Button>
            <Text mx={3} fontWeight="semibold">
              {likes}
            </Text>
            <Button>
              <ArrowDownIcon />
            </Button>
          </Flex>
        </Flex>
      </VStack>
    </Container>
  );
};
