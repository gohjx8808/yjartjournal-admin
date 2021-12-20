import React, { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { Route, Routes, useNavigate } from 'react-router';
import Login from '../auth/views/Login';
import Dashboard from '../Dashboard';
import routeNames from './routeNames';

const Router = () => {
  const navigate = useNavigate();
  const [cookie] = useCookies(['userInfo']);

  useEffect(() => {
    if (!cookie.userInfo) {
      navigate(routeNames.home);
    }
  }, [navigate, cookie]);

  return (
    <Routes>
      <Route path={routeNames.home} element={<Login />} />
      <Route path={routeNames.dashboard} element={<Dashboard />} />
    </Routes>
  );
};

export default Router;
