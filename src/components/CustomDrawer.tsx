import {
  Button,
  Divider,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  VStack,
} from '@chakra-ui/react';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router';
import routeNames from '../modules/router/routeNames';

interface CustomDrawerProps{
  isDrawerOpen:boolean
  onDrawerClose:()=>void
}

const CustomDrawer = (props:CustomDrawerProps) => {
  const { isDrawerOpen, onDrawerClose } = props;

  const { pathname } = useLocation();
  const navigate = useNavigate();

  const onNavigate = (routeName:route) => {
    navigate(routeName);
    onDrawerClose();
  };

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
        <Divider />
        <DrawerBody>
          <VStack divider={<Divider />}>
            <Button
              colorScheme="secondary"
              variant="ghost"
              w="100%"
              leftIcon={<FaUser />}
              justifyContent="left"
              isActive={pathname === routeNames.users}
              onClick={() => onNavigate(routeNames.users)}
            >
              Users
            </Button>
            <Button
              colorScheme="secondary"
              variant="ghost"
              w="100%"
              leftIcon={<FaShoppingCart />}
              justifyContent="left"
              isActive={pathname === routeNames.products}
              onClick={() => onNavigate(routeNames.products)}
            >
              Products
            </Button>
          </VStack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
};

export default CustomDrawer;
