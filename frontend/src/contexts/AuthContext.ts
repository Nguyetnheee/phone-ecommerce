import { createContext, useContext } from 'react';

export interface AuthUser {
  email: string;
  role: string;
}

export interface AuthContextType {
  authUser: AuthUser | null;
  isAuthenticated: boolean;
  setAuthUser: (user: AuthUser | null) => void;
  logout: () => void;
}

export const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}
