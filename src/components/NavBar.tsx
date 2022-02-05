import {
  Box, HStack, IconButton, Spacer, Text,
} from '@chakra-ui/react';
import { useCookies } from 'react-cookie';
import { FaBars, FaSignOutAlt } from 'react-icons/fa';

interface NavBarProps{
  toggleDrawer:()=>void
}

const NavBar = (props:NavBarProps) => {
  const [cookies] = useCookies(['userInfo']);
  const { toggleDrawer } = props;

  return (
    <Box bg="primary.500" p={3}>
      <HStack mx={3}>
        <IconButton
          aria-label="toggleDrawer"
          icon={<FaBars />}
          variant="ghost"
          colorScheme="black"
          onClick={toggleDrawer}
          _hover={{ backgroundColor: 'primary.600' }}
        />
        <Spacer />
        <HStack>
          <Text fontWeight="600">
            Welcome,
            {' '}
            {cookies.userInfo.fullName}
          </Text>
          <IconButton aria-label="toggleDrawer" icon={<FaSignOutAlt />} variant="ghost" colorScheme="black" _hover={{ backgroundColor: 'primary.600' }} />
        </HStack>
      </HStack>
    </Box>
  );
};

export default NavBar;
