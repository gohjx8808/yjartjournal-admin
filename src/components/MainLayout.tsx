import { Text } from '@chakra-ui/react';
import React, { FC, useState } from 'react';
import { Outlet } from 'react-router';
import UserList from '../modules/users/views/UserList';
import CustomDrawer from './CustomDrawer';
import NavBar from './NavBar';

const MainLayout = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <>
      <NavBar toggleDrawer={toggleDrawer} />
      <CustomDrawer isDrawerOpen={isDrawerOpen} onDrawerClose={toggleDrawer} />
      <Outlet />
    </>
  );
};

export default MainLayout;
