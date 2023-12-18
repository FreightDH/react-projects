import { FC, ReactElement, ReactNode } from 'react';
import { Navigate, useLocation } from 'react-router-dom';

interface RequireAuthProps {
  children: ReactNode;
}

const RequireAuth: FC<RequireAuthProps> = ({ children }): ReactElement => {
  const location = useLocation();

  if (!localStorage.getItem('isAuth')) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <>{children}</>;
};

export default RequireAuth;
