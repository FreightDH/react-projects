import { FC, ReactElement, ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from './useAuth';

interface RequireAuthProps {
  children: ReactNode;
}

const RequireAuth: FC<RequireAuthProps> = ({ children }): ReactElement => {
  const location = useLocation();
  const { user } = useAuth();

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <>{children}</>;
};

export default RequireAuth;
