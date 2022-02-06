import { Flex, Spinner } from '@chakra-ui/react';

const Loader = ({ color }: { color: string }): JSX.Element => (
  <Flex height="100%" width="100%" justifyContent="center" alignItems="center">
    <Spinner size="lg" color={color} />
  </Flex>
);

export default Loader;
