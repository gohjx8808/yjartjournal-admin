import {
  Box, HStack, Tooltip, IconButton, Spacer,
  Text, Button, Drawer, DrawerBody, DrawerCloseButton,
  DrawerContent, DrawerFooter, DrawerHeader, DrawerOverlay, Input,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { useCookies } from 'react-cookie';
import { FaBars, FaSignOutAlt } from 'react-icons/fa';

const MainLayout = () => {
  const [cookies] = useCookies(['userInfo']);
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const onDrawerClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <Box bg="primary.main" p={3}>
        <HStack mx={3}>
          <Tooltip label="Toggle Drawer">
            <IconButton
              aria-label="toggleDrawer"
              icon={<FaBars />}
              variant="ghost"
              _hover={{ bg: 'primary.main' }}
              onClick={() => setIsDrawerOpen(true)}
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
              <IconButton aria-label="toggleDrawer" icon={<FaSignOutAlt />} variant="ghost" _hover={{ bg: 'primary.main' }} />
            </Tooltip>
          </HStack>
        </HStack>
      </Box>
      <Drawer
        isOpen={isDrawerOpen}
        placement="left"
        onClose={onDrawerClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>
          <Button colorScheme="secondary" variant="ghost">
            test
          </Button>
          <DrawerBody>
            <Input placeholder="Type here..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onDrawerClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Save</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default MainLayout;
