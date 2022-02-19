import { Button, Flex, FormControl, Text } from '@chakra-ui/react';
import MenuBar from 'components/MenuBar';
import { Formik, FormikProps, Form } from 'formik';
import Select, { GroupBase } from 'react-select';
import { ReferHomeInitialValues } from 'utils';
import * as Yup from 'yup';
import { ArrowMaleFriend, ArrowFemaleFriend } from 'components/Icons';
import { useAuthContext } from 'context/AuthProvider';
import Loader from 'components/Loader';

const ReferHomeValidation = Yup.object().shape({
  MaleFriend: Yup.string().required('A Male friend is required!'),
  FemaleFriend: Yup.string().required('A Female friend is required'),
});

interface CountryOption {
  label: string;
  value: string;
}

export const groupedCountries = [
  {
    label: 'Friends',
    options: [
      {
        label: 'Rahul shreyskar',
        value: 'Sri Lanka',
      },
      {
        label: 'rohit kejriwal',
        value: 'Syria',
      },
      {
        label: 'naman chapparia',
        value: 'Tajikistan',
      },
      {
        label: 'mridhul khare',
        value: 'Thailand',
      },
      {
        label: 'dhurv goyal',
        value: 'Turkey',
      },
      {
        label: 'deshanki singhal',
        value: 'Turkmenistan',
      },
      {
        label: 'Yashwani singh',
        value: 'United Arab Emirates',
      },
      {
        label: 'Ojasvi khandelwal',
        value: 'Uzbekistan',
      },
      {
        label: 'Shreya jain',
        value: 'Vietnam',
      },
      {
        label: 'Sanskar Garg',
        value: 'Yemen',
      },
    ],
  },
];

export const colorOptions = [
  {
    value: 'blue',
    label: 'Blue',
    color: '#0052CC',
  },
  {
    value: 'purple',
    label: 'Purple',
    color: '#5243AA',
  },
  {
    value: 'red',
    label: 'Red',
    color: '#FF5630',
  },
  {
    value: 'orange',
    label: 'Orange',
    color: '#FF8B00',
  },
  {
    value: 'yellow',
    label: 'Yellow',
    color: '#FFC400',
  },
  {
    value: 'green',
    label: 'Green',
    color: '#36B37E',
  },
];

const Home = (): JSX.Element => {
  const customStyles = {
    control: (style: any) => ({
      ...style,
      borderRadius: '28px',
    }),
    container: (style: any) => ({
      ...style,
      boxShadow: '16px 20px 68px rgba(194, 96, 114, 0.56)',
      borderRadius: '30px',
      width: '320px',
      justifyContent: 'center',
    }),
    valueContainer: (style: any) => ({
      ...style,
      height: '120px',
      justifyContent: 'center',
      alignItems: 'center',
    }),
  };

  const { authLoading } = useAuthContext();
  return (
    <Flex direction="column" bg="custom.pulpbg" height="100%">
      <MenuBar />
      {authLoading ? (
        <Loader color="black" />
      ) : (
        <Formik
          initialValues={ReferHomeInitialValues}
          validationSchema={ReferHomeValidation}
          onSubmit={(e) => {
            console.log(e);
          }}
        >
          {/* eslint-disable-next-line no-undef */}
          {({ handleSubmit }: FormikProps<ReferValues>) => (
            <Form onSubmit={handleSubmit}>
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
                  <FormControl p={4} width="320px">
                    <Select<CountryOption, true, GroupBase<CountryOption>>
                      options={groupedCountries}
                      styles={customStyles}
                      components={{
                        DropdownIndicator: () => null,
                        IndicatorSeparator: () => null,
                      }}
                      placeholder={
                        <Flex alignItems="center">
                          <Text ml={2} textStyle="heading1">Male Friend</Text>
                        </Flex>
                      }
                    />
                  </FormControl>
                  <FormControl p={4} width="320px">
                    <Select<CountryOption, true, GroupBase<CountryOption>>
                      placeholder={
                        <Flex alignItems="center">
                          <Text ml={2} textStyle="heading1">Female Friend</Text>
                        </Flex>
                      }
                      options={groupedCountries}
                      styles={customStyles}
                      components={{
                        DropdownIndicator: () => null,
                        IndicatorSeparator: () => null,
                      }}
                    />
                  </FormControl>
                  <Flex position="absolute" left="320px" top="70px">
                    <ArrowMaleFriend />
                  </Flex>
                  <Flex position="absolute" right="320px" top="70px">
                    <ArrowFemaleFriend />
                  </Flex>
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
                  onClick={() => handleSubmit()}
                >
                  Refer
                </Button>
              </Flex>
            </Form>
          )}
        </Formik>
      )}
    </Flex>
  );
};

export default Home;
