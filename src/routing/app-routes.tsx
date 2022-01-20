import { Routes, Route, Navigate } from 'react-router-dom';
import { HomeContainer } from '../app/home/home.container';
import { LoginContainer } from '../app/login/login.container';
import { RegisterContainer } from '../app/register/register.container';
import { AppRoute } from './app-route.enum';
import { GuestOnly } from './guest-only';
import { RequireAuth } from './require-auth';

export const AppRoutes = () => (
  <Routes>
    <Route
      path={AppRoute.Home}
      element={
        <RequireAuth>
          <HomeContainer />
        </RequireAuth>
      }
    />
    <Route
      path={AppRoute.Login}
      element={
        <GuestOnly>
          <LoginContainer />
        </GuestOnly>
      }
    />
    <Route
      path={AppRoute.Register}
      element={
        <GuestOnly>
          <RegisterContainer />
        </GuestOnly>
      }
    />
    <Route path="*" element={<Navigate to={AppRoute.Login} />} />
  </Routes>
);
