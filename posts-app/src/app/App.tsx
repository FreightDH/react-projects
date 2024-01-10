import { ReactElement } from 'react';
import { RouterProvider } from 'react-router-dom';
import { AuthProvider } from 'features';
import router from './router';

const App = (): ReactElement => {
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
};

export default App;
