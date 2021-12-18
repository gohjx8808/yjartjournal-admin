import { Routes, Route } from 'react-router';
import React from 'react';
import Login from '../auth/views/Login';
import routeNames from './routeNames';
import Dashboard from '../Dashboard';

const Router = () => (
  <Routes>
    <Route path={routeNames.home} element={<Login />} />
    <Route path={routeNames.dashboard} element={<Dashboard />} />
  </Routes>
);

export default Router;
