import { Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const MenuBar = (): JSX.Element => (
  <Flex
    justifyContent="space-evenly"
    alignItems="center"
    bg="white"
    width="95%"
    alignSelf="center"
  >
    <Link to="/">PulpSpit</Link>
    <Link to="/">Request pending</Link>
    <Link to="/">Friends available</Link>
    <Link to="/dashboard">Dashboard</Link>
    <Link to="/">About us</Link>
  </Flex>
);

export default MenuBar;
