import { Routes, Route, Navigate } from 'react-router-dom';
import { CreatePostContainer } from '../app/create-post/create-post.container';
import { EditPostContainer } from '../app/edit-post/edit-post.container';
import { HomeContainer } from '../app/home/home.container';
import { LoginContainer } from '../app/login/login.container';
import { LogoutContainer } from '../app/logout/logout.container';
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
      path={AppRoute.CreatePost}
      element={
        <RequireAuth>
          <CreatePostContainer />
        </RequireAuth>
      }
    />
    <Route
      path={`${AppRoute.EditPost}/:id`}
      element={
        <RequireAuth>
          <EditPostContainer />
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
    <Route path={AppRoute.Logout} element={<LogoutContainer />} />
    <Route path="*" element={<Navigate to={AppRoute.Login} />} />
  </Routes>
);
