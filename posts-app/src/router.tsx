import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import App from 'app/App';
import Layout from 'app/layout/Layout';
import { Login, Register } from './pages';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<App />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Route>
  )
);

export default router;
