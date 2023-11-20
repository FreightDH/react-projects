import { Route, createBrowserRouter, createRoutesFromElements } from 'react-router-dom';
import Home from 'pages/Home/Home';
import Layout from './layout/Layout';
import { Login, Register } from '../pages';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
    </Route>
  )
);

export default router;
