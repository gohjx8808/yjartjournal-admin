import { useEffect } from 'react';
import { useCookies } from 'react-cookie';
import { Route, Routes, useNavigate } from 'react-router';
import MainLayout from '../../components/MainLayout';
import Login from '../auth/views/Login';
import Dashboard from '../Dashboard';
import ProductList from '../products/views/ProductList';
import UserList from '../users/views/UserList';
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
      <Route element={<MainLayout />}>
        <Route path={routeNames.dashboard} element={<Dashboard />} />
        <Route path={routeNames.users} element={<UserList />} />
        <Route path={routeNames.products} element={<ProductList />} />
      </Route>
    </Routes>
  );
};

export default Router;
