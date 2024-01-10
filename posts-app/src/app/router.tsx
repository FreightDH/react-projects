import { Navigate, Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Layout from './layout/Layout';
import { RequireAuth } from 'features';
import { HomePage, LoginPage, PostDetailsPage, PostsPage, RegisterPage } from '../pages';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route
          path="posts"
          element={
            <RequireAuth>
              <PostsPage />
            </RequireAuth>
          }
        />
        <Route
          path="posts/:id"
          element={
            <RequireAuth>
              <PostDetailsPage />
            </RequireAuth>
          }
        />
      </Route>
      <Route>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
      </Route>
      <Route path="*" element={<Navigate to="/" replace />} />
    </Route>
  )
);

export default router;
