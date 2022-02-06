import { Button, Flex, Text } from '@chakra-ui/react';

const LandingPage = (): JSX.Element => (
  <Flex direction="column" alignItems="center">
    <Flex justifyContent="center" gap="50px" direction="column">
      <h1>Welcome To Pulpspit</h1>
      <h3>Where we let human decide your perfect one!</h3>
    </Flex>
    <Flex direction="column">
      <Button width="100%">Sign in with facebook</Button>
      <Text>
        We are currently using facebook. Will expand to other platforms in later
        versions.
      </Text>
    </Flex>
  </Flex>
);

export default LandingPage;
