import { createContext } from 'react';

interface AuthContextProps {
  user: User | null;
  signIn: (userInfo: User, callback: () => void) => void;
  signUp: (userInfo: User, callback: () => void) => void;
  logout: (callback: () => void) => void;
}

const AuthContext = createContext<AuthContextProps>({
  user: null,
  signIn: () => {},
  signUp: () => {},
  logout: () => {},
});

export default AuthContext;
