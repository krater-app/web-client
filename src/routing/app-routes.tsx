import { Routes, Route, Navigate } from 'react-router-dom';
import { CreatePostContainer } from '../app/create-post/create-post.container';
import { EditPostContainer } from '../app/edit-post/edit-post.container';
import { HomeContainer } from '../app/home/home.container';
import { LoginContainer } from '../app/login/login.container';
import { LogoutContainer } from '../app/logout/logout.container';
import { ProfileContainer } from '../app/profile/profile.container';
import { RegisterContainer } from '../app/register/register.container';
import { VerificationCode } from '../app/verification-code/verification-code.container';
import { YourPostsContainer } from '../app/your-posts/your-posts.container';
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
      path={AppRoute.YourPosts}
      element={
        <RequireAuth>
          <YourPostsContainer />
        </RequireAuth>
      }
    />
    <Route
      path={AppRoute.Profile}
      element={
        <RequireAuth>
          <ProfileContainer />
        </RequireAuth>
      }
    />
    <Route
      path={AppRoute.VerificationCode}
      element={
        <RequireAuth>
          <VerificationCode />
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
