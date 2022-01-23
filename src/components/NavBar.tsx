import {
  Box, HStack, Tooltip, IconButton, Spacer, Text,
} from '@chakra-ui/react';
import { useCookies } from 'react-cookie';
import { FaBars, FaSignOutAlt } from 'react-icons/fa';
import React from 'react';

interface NavBarProps{
  toggleDrawer:()=>void
}

const NavBar = (props:NavBarProps) => {
  const [cookies] = useCookies(['userInfo']);
  const { toggleDrawer } = props;

  return (
    <Box bg="primary.500" p={3}>
      <HStack mx={3}>
        <Tooltip label="Toggle Drawer">
          <IconButton
            aria-label="toggleDrawer"
            icon={<FaBars />}
            variant="ghost"
            colorScheme="black"
            onClick={toggleDrawer}
          />
        </Tooltip>
        <Spacer />
        <HStack>
          <Text fontWeight="600">
            Welcome,
            {' '}
            {cookies.userInfo.fullName}
          </Text>
          <Tooltip label="Log Out">
            <IconButton aria-label="toggleDrawer" icon={<FaSignOutAlt />} variant="ghost" colorScheme="black" />
          </Tooltip>
        </HStack>
      </HStack>
    </Box>
  );
};

export default NavBar;
