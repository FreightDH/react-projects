import { createBrowserRouter } from 'react-router-dom';
import App from 'app/App';
import { Login } from './pages';

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
  },
  {
    path: '/login',
    element: <Login />,
  },
]);

export default router;
