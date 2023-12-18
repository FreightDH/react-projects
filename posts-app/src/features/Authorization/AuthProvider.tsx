import { FC, ReactElement, ReactNode, useMemo, useState } from 'react';
import AuthContext from './AuthContext';

interface AuthProviderProps {
  children: ReactNode;
}

const AuthProvider: FC<AuthProviderProps> = ({ children }): ReactElement => {
  const [user, setUser] = useState<User | null>(null);

  const signIn = (userInfo: User, callback: () => void) => {
    const user = localStorage.getItem(userInfo.email);

    if (!user) {
      alert("This user doesn't exists!");
      return;
    }

    const userPassword = JSON.parse(user).password;

    if (userInfo.password !== userPassword) {
      alert('Password is incorrect!');
      return;
    }

    setUser(userInfo);
    callback();
  };

  const signUp = (userInfo: User, callback: () => void) => {
    setUser(userInfo);
    localStorage.setItem(userInfo.email, JSON.stringify(userInfo));
    callback();
  };

  const logout = () => {
    setUser(null);
  };

  const value = useMemo(() => ({ user, signIn, signUp, logout }), [user, signIn, signUp, logout]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
