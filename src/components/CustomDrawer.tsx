import {
  Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Button,
} from '@chakra-ui/react';
import { FaUser } from 'react-icons/fa';
import React from 'react';

interface CustomDrawerProps{
  isDrawerOpen:boolean
  onDrawerClose:()=>void
}

const CustomDrawer = (props:CustomDrawerProps) => {
  const { isDrawerOpen, onDrawerClose } = props;

  return (
    <Drawer
      isOpen={isDrawerOpen}
      placement="left"
      onClose={onDrawerClose}
    >
      <DrawerOverlay />
      <DrawerContent>
        <DrawerCloseButton />
        <DrawerHeader>
          YJ ArtJournal Admin
        </DrawerHeader>
        <DrawerBody>
          <Button colorScheme="secondary" variant="ghost" w="100%" leftIcon={<FaUser />} justifyContent="left">
            Users
          </Button>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default CustomDrawer;
