import { Routes, Route, useNavigate } from 'react-router';
import React, { useEffect } from 'react';
import Login from '../auth/views/Login';
import routeNames from './routeNames';
import Dashboard from '../Dashboard';
import { useAppSelector } from '../../store/hooks';

const Router = () => {
  const userInfo = useAppSelector((state) => state.auth.userInfo);
  const navigate = useNavigate();

  useEffect(() => {
    if (!userInfo.uid) {
      navigate(routeNames.home);
    }
  }, [navigate, userInfo.uid]);

  return (
    <Routes>
      <Route path={routeNames.home} element={<Login />} />
      <Route path={routeNames.dashboard} element={<Dashboard />} />
    </Routes>
  );
};

export default Router;
