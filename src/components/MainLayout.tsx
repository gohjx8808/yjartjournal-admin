import { useState } from 'react';
import { Outlet } from 'react-router';
import CustomDrawer from './CustomDrawer';
import Footer from './Footer';
import NavBar from './NavBar';

const MainLayout = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => setIsDrawerOpen(!isDrawerOpen);

  return (
    <>
      <NavBar toggleDrawer={toggleDrawer} />
      <CustomDrawer isDrawerOpen={isDrawerOpen} onDrawerClose={toggleDrawer} />
      <Outlet />
      <Footer />
    </>
  );
};

export default MainLayout;
