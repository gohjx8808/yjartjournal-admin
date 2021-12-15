import { Routes, Route } from 'react-router';
import React from 'react';
import Login from './auth/views/Login';

const Router = () => (
  <Routes>
    <Route path="/" element={<Login />} />
  </Routes>
);

export default Router;
