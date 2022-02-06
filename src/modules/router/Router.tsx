import { getAuth } from 'firebase/auth';
import { Route, Routes, useNavigate } from 'react-router';
import MainLayout from '../../components/MainLayout';
import Login from '../auth/views/Login';
import Dashboard from '../Dashboard';
import ProductList from '../products/views/ProductList';
import UserList from '../users/views/UserList';
import routeNames from './routeNames';

const Router = () => {
  const navigate = useNavigate();

  getAuth().onAuthStateChanged((user) => {
    if (!user) {
      navigate(routeNames.home);
    }
  });

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
