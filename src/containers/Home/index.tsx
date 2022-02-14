import { Button, Flex, Select, Text } from '@chakra-ui/react';
import MenuBar from 'components/MenuBar';
import { Formik, FormikProps, Form } from 'formik';
import { ReferHomeInitialValues } from 'utils';
import * as Yup from 'yup';
import ArrowMaleFriend from '../../components/Icons/ArrowMaleFriend';
import ArrowFemaleFriend from '../../components/Icons/ArrowFemaleFriend';

const ReferHomeValidation = Yup.object().shape({
  MaleFriend: Yup.string().required('A Male friend is required!'),
  FemaleFriend: Yup.string().required('A Female friend is required'),
});

const Home = (): JSX.Element => {
  return (
    <Flex direction="column" bg="custom.pulpbg" height="100%">
      <MenuBar />
      <Formik
        initialValues={ReferHomeInitialValues}
        validationSchema={ReferHomeValidation}
        onSubmit={(e) => {
          console.log(e);
        }}
      >
        {/* eslint-disable-next-line no-undef */}
        {(props: FormikProps<ReferValues>) => (
          <Form onSubmit={props.handleSubmit}>
            <Flex justifyContent="center" direction="column" gap="60px">
              <Text textAlign="center" textStyle="heading1" mt={12}>
                Make a Match
              </Text>
              <Flex
                justifyContent="space-evenly"
                flexWrap="wrap"
                gap="30px"
                position="relative"
              >
                <Select
                  placeholder="Male friend"
                  variant="filled"
                  height="120px"
                  width="320px"
                  borderRadius="30px"
                  justifyContent="center"
                  textStyle="heading1"
                  alignItems="center"
                  bg="custom.pulpOffWhite"
                  boxShadow="16px 20px 68px rgba(194, 96, 114, 0.56)"
                  onChange={(event) => {
                    props.setFieldValue('MaleFriend', event.target.value);
                  }}
                >
                  <option>Ritesh</option>
                </Select>
                <Flex position="absolute" left="320px" top="70px">
                  <ArrowMaleFriend />
                </Flex>
                <Flex position="absolute" right="320px" top="70px" zIndex="100">
                  <ArrowFemaleFriend />
                </Flex>
                <Select
                  placeholder="Female friend"
                  variant="filled"
                  height="120px"
                  width="320px"
                  borderRadius="30px"
                  justifyContent="center"
                  alignItems="center"
                  bg="custom.pulpOffWhite"
                  textStyle="heading1"
                  boxShadow="16px 20px 68px rgba(194, 96, 114, 0.56)"
                  onChange={(event) => {
                    props.setFieldValue('FemaleFriend', event.target.value);
                  }}
                >
                  <option>Ananya</option>
                </Select>
              </Flex>
              <Button
                alignSelf="center"
                height="81px"
                width="344px"
                borderRadius="24px"
                mt={12}
                bg="linear-gradient(89.91deg, #9F416E -8.26%, #EE2045 144.55%)"
                color="white"
                textStyle="heading1"
                boxShadow="6px 9px 40px 0px rgba(191, 127, 255, 0.53)"
                border="1px solid"
                borderColor="linear-gradient(87.1deg, #FFFFFF -3.02%, #DD4835 96.54%)"
              >
                Refer
              </Button>
            </Flex>
          </Form>
        )}
      </Formik>
    </Flex>
  );
};

export default Home;
