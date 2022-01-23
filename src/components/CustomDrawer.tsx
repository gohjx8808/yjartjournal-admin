import {
  Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Button, VStack,
} from '@chakra-ui/react';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
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
          <VStack>
            <Button colorScheme="secondary" variant="ghost" w="100%" leftIcon={<FaUser />} justifyContent="left">
              Users
            </Button>
            <Button colorScheme="secondary" variant="ghost" w="100%" leftIcon={<FaShoppingCart />} justifyContent="left">
              Products
            </Button>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default CustomDrawer;
