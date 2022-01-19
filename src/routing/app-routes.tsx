import { Routes, Route } from 'react-router-dom';
import { LoginContainer } from '../app/login/login.container';
import { Register } from '../app/register/register';
import { AppRoute } from './app-route.enum';

export const AppRoutes = () => (
  <Routes>
    <Route path={AppRoute.Login} element={<LoginContainer />} />
    <Route path={AppRoute.Register} element={<Register />} />
  </Routes>
);
