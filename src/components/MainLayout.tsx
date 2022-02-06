import { Heading, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { Outlet, useLocation } from 'react-router';
import routeNames from '../modules/router/routeNames';
import CustomDrawer from './CustomDrawer';
import Footer from './Footer';
import NavBar from './NavBar';

const MainLayout = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  const { pathname } = useLocation();

  const pageTitle = Object.keys(routeNames).find((key) => routeNames[key] === pathname);

  return (
    <>
      <NavBar toggleDrawer={toggleDrawer} />
      <CustomDrawer isDrawerOpen={isDrawerOpen} onDrawerClose={toggleDrawer} />
      <VStack bgColor="primary.50" py="5" px="8" alignItems="flex-start">
        <Heading textTransform="capitalize" size="lg">{pageTitle}</Heading>
      </VStack>
      <VStack py="8" px="8" alignItems="flex-start">
        <Outlet />
      </VStack>
      <Footer />
    </>
  );
};

export default MainLayout;
