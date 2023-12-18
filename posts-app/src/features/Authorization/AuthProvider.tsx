import { FC, ReactElement, ReactNode, useMemo, useState } from 'react';
import AuthContext from './AuthContext';

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: FC<AuthProviderProps> = ({ children }): ReactElement => {
  const [user, setUser] = useState<User | null>(null);

  const signIn = (userInfo: User, callback: () => void) => {
    setUser(userInfo);
    callback();
  };

  const signUp = (userInfo: User, callback: () => void) => {
    setUser(userInfo);
    localStorage.setItem(userInfo.email, JSON.stringify(userInfo));
    callback();
  };

  const logout = (callback: () => void) => {
    setUser(null);
    callback();
  };

  const value = useMemo(() => ({ user, signIn, signUp, logout }), [user, signIn, signUp, logout]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
