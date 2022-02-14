import { Button, Flex, Text } from '@chakra-ui/react';
import { useAuthContext } from 'context/AuthProvider';
import { PulpspitLogo } from 'components/Icons/pulpspitLogo';
import { FaFacebook } from 'react-icons/fa';
import { LandingPageLeftReferIcon } from 'components/Icons/landingPageLeftReferIcon';
import { LandingPageRightReferIcon } from 'components/Icons/landingPageRightReferIcon';
import useWindowDimensions, { leastSquaresFitCalc } from 'utils';

const LandingPage = (): JSX.Element => {
  const { signInWithFacebook } = useAuthContext();
  return (
    <Flex direction="column">
      <Flex
        alignItems="center"
        position="relative"
        flexWrap="wrap"
        justifyContent={useWindowDimensions().width < 1074 ? 'center' : ''}
      >
        <PulpspitLogo
          boxSize={leastSquaresFitCalc(
            new Map([
              [411, 140],
              [1440, 380],
            ]),
          )}
        />
        <Flex direction="column" mb={10} p={4}>
          <Text
            textAlign="center"
            textStyle="landingPageHeading"
            fontSize={leastSquaresFitCalc(
              new Map([
                [411, 36],
                [1440, 72],
              ]),
            )}
            lineHeight={leastSquaresFitCalc(
              new Map([
                [411, 57],
                [1440, 114],
              ]),
            )}
            opacity={0.7}
          >
            PulpsPit
          </Text>
          <Text
            textStyle="heading2"
            fontSize={leastSquaresFitCalc(
              new Map([
                [411, 12],
                [1440, 24],
              ]),
            )}
            lineHeight={leastSquaresFitCalc(
              new Map([
                [411, 14],
                [1440, 28],
              ]),
            )}
            color="#676767"
            opacity={0.7}
          >
            Where the world gets together to find your perfect match
          </Text>
        </Flex>
      </Flex>
      <Flex
        borderRadius="24px"
        height="330px"
        width="330px"
        justifyContent="center"
        alignSelf="center"
        alignItems="center"
        direction="column"
        p={6}
        gap="40px"
        boxShadow="0px 6px 12px rgba(0, 0, 0, 0.18)"
        mt={leastSquaresFitCalc(
          new Map([
            [411, 100],
            [1440, 0],
          ]),
        )}
      >
        <Text textStyle="heading2" opacity="0.8">
          Log in to PulpSpit
        </Text>
        <Button
          colorScheme="facebook"
          leftIcon={<FaFacebook />}
          onClick={signInWithFacebook}
          textStyle="heading2"
        >
          Sign in with facebook
        </Button>
        <Text textStyle="body" textAlign="center" fontFamily="Raleway">
          We are currently using Facebook. We will expand to other platforms
          soon!
        </Text>
      </Flex>
      {useWindowDimensions().width > 1074 && (
        <>
          <Flex position="absolute" bottom="0px">
            <LandingPageLeftReferIcon />
          </Flex>
          <Flex position="absolute" bottom="0px" right="32px">
            <LandingPageRightReferIcon />
          </Flex>
        </>
      )}
    </Flex>
  );
};

export default LandingPage;
