import type { ReactNode } from 'react';
import { useState, useEffect } from 'react';
import type { AuthUser } from './AuthContext';
import { AuthContext } from './AuthContext';
import { logout as logoutService } from '../services/authService';

interface AuthProviderProps {
  children: ReactNode;
}

const AUTH_USER_KEY = 'auth_user';

export function AuthProvider({ children }: AuthProviderProps) {
  const [authUser, setAuthUser] = useState<AuthUser | null>(null);

  // Initialize auth state from localStorage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem(AUTH_USER_KEY);
      if (stored) {
        setAuthUser(JSON.parse(stored));
      }
    } catch (error) {
      console.error('[AuthProvider] Error loading auth state:', error);
    }
  }, []);

  const handleSetAuthUser = (user: AuthUser | null) => {
    setAuthUser(user);
    if (user) {
      try {
        localStorage.setItem(AUTH_USER_KEY, JSON.stringify(user));
      } catch (error) {
        console.error('[AuthProvider] Error saving auth state:', error);
      }
    }
  };

  const handleLogout = () => {
    logoutService();
    setAuthUser(null);
  };

  return (
    <AuthContext.Provider
      value={{
        authUser,
        isAuthenticated: !!authUser,
        setAuthUser: handleSetAuthUser,
        logout: handleLogout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}
