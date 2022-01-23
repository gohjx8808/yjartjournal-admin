import React, { useState } from 'react';
import CustomDrawer from './CustomDrawer';
import NavBar from './NavBar';

const MainLayout = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <>
      <NavBar toggleDrawer={toggleDrawer} />
      <CustomDrawer isDrawerOpen={isDrawerOpen} onDrawerClose={toggleDrawer} />
    </>
  );
};

export default MainLayout;
