import { Flex, Text } from '@chakra-ui/react';
import MenuBar from 'components/MenuBar';

const Dashboard = (): JSX.Element => {
  return (
    <Flex
      justifyContent="center"
      direction="column"
      bg="custom.pulpbg"
      height="100%"
      gap="40px"
      py={10}
    >
      <MenuBar />
      <Flex flexWrap="wrap" justifyContent="space-evenly">
        <Flex
          direction="column"
          width="234px"
          height="134px"
          bg="white"
          justifyContent="center"
          alignItems="center"
          gap="20px"
          borderRadius="10px"
        >
          <Text textStyle="text1">Matches for you</Text>
          <Text
            textStyle="dashboardLeagueNumber"
            fontSize="40px"
            lineHeight="14px"
          >
            3
          </Text>
        </Flex>
        <Flex
          direction="column"
          width="234px"
          height="134px"
          bg="white"
          justifyContent="center"
          alignItems="center"
          gap="20px"
          borderRadius="10px"
        >
          <Text textStyle="text1">Decision onHold</Text>
          <Text
            textStyle="dashboardLeagueNumber"
            fontSize="40px"
            lineHeight="14px"
          >
            15
          </Text>
        </Flex>
        <Flex
          direction="column"
          width="234px"
          height="134px"
          bg="white"
          justifyContent="center"
          alignItems="center"
          gap="20px"
          borderRadius="10px"
        >
          <Text textStyle="text1">Total Friends</Text>
          <Text textStyle="userProfileNumber" fontSize="40px" lineHeight="14px">
            40
          </Text>
        </Flex>
      </Flex>
      <Flex
        width="95%"
        justifyContent="space-evenly"
        bg="white"
        flexWrap="wrap"
        alignSelf="center"
        p={6}
      >
        <Flex direction="column" justifyContent="center" alignItems="center">
          <Text textStyle="dashboardMatcherTitle">Matchmaker Level</Text>
          <Text textStyle="dashboardLeagueNumber">5th</Text>
        </Flex>
        <Flex
          direction="column"
          justifyContent="center"
          alignItems="center"
          textStyle="heading2"
        >
          <Text fontWeight={500}>Matches made</Text>
          <Text textStyle="dashboardStatNumber" fontWeight="bold">
            40
          </Text>
          <br />
          <Text fontWeight={500}>World Rank</Text>
          <Text textStyle="dashboardStatNumber" fontWeight="bold">
            700th
          </Text>
          <br />
          <Text fontWeight={500}>Success rate</Text>
          <Text textStyle="dashboardStatNumber" fontWeight="bold">
            84%
          </Text>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default Dashboard;
