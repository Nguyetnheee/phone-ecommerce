/**
 * Auth Service - Backend Integration
 * 
 * Handles authentication with real backend APIs
 * - Register: POST /api/auth/register
 * - Login: POST /api/auth/login
 */

// Types for auth payloads
export interface LoginPayload {
  email: string;
  password: string;
}

export interface RegisterPayload {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  token?: string;
  user?: {
    id?: number;
    email?: string;
    fullName?: string;
  };
}

// API base URL
const API_BASE = 'http://localhost:8080/api/auth';

// localStorage keys
const TOKEN_KEY = 'auth_token';
const USER_KEY = 'auth_user';

/**
 * Store authentication token
 */
function storeToken(token: string): void {
  try {
    localStorage.setItem(TOKEN_KEY, token);
  } catch (error) {
    console.error('[Auth] Error storing token:', error);
  }
}

/**
 * Get stored authentication token
 */
export function getToken(): string | null {
  try {
    return localStorage.getItem(TOKEN_KEY);
  } catch (error) {
    console.error('[Auth] Error retrieving token:', error);
    return null;
  }
}

/**
 * Store user data
 */
function storeUser(user: { id?: number; email?: string; fullName?: string }): void {
  try {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
  } catch (error) {
    console.error('[Auth] Error storing user:', error);
  }
}

/**
 * Get stored user data
 */
export function getUser(): { id?: number; email?: string; fullName?: string } | null {
  try {
    const user = localStorage.getItem(USER_KEY);
    return user ? JSON.parse(user) : null;
  } catch (error) {
    console.error('[Auth] Error retrieving user:', error);
    return null;
  }
}

/**
 * Login function
 * 
 * Calls POST /api/auth/login with email and password
 */
export async function login(payload: LoginPayload): Promise<AuthResponse> {
  try {
    console.log('[Auth] Login attempt with email:', payload.email);

    const response = await fetch(`${API_BASE}/login`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: payload.email,
        password: payload.password,
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.warn('[Auth] Login failed:', data);
      return {
        success: false,
        message: data.message || 'Login failed. Please check your email and password.',
      };
    }

    console.log('[Auth] Login successful');

    // Store token if provided
    if (data.token) {
      storeToken(data.token);
      console.log('[Auth] Token stored');
    }

    // Store user if provided
    if (data.user) {
      storeUser(data.user);
      console.log('[Auth] User data stored');
    }

    return {
      success: true,
      message: data.message || 'Login successful',
      token: data.token,
      user: data.user,
    };
  } catch (error) {
    console.error('[Auth] Login error:', error);
    return {
      success: false,
      message: 'Network error. Please check your connection.',
    };
  }
}

/**
 * Register function
 * 
 * Calls POST /api/auth/register with fullName, email, password
 * Frontend collects name, email, password, confirmPassword
 * We only send fullName, email, password to backend
 */
export async function register(payload: RegisterPayload): Promise<AuthResponse> {
  try {
    console.log('[Auth] Register attempt with email:', payload.email);

    const response = await fetch(`${API_BASE}/register`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        fullname: payload.name, // Map frontend 'name' to backend 'fullname' (all lowercase)
        email: payload.email,
        password: payload.password,
        // Do NOT send confirmPassword to backend
      }),
    });

    const data = await response.json();

    if (!response.ok) {
      console.warn('[Auth] Register failed:', data);
      return {
        success: false,
        message: data.message || 'Registration failed. Please try again.',
      };
    }

    console.log('[Auth] Registration successful');

    return {
      success: true,
      message: data.message || 'Registration successful. Please login with your credentials.',
      user: data,
    };
  } catch (error) {
    console.error('[Auth] Register error:', error);
    return {
      success: false,
      message: 'Network error. Please check your connection.',
    };
  }
}

/**
 * Logout function
 * 
 * Clears authentication data from localStorage
 */
export function logout(): void {
  console.log('[Auth] Logout');
  try {
    localStorage.removeItem(TOKEN_KEY);
    localStorage.removeItem(USER_KEY);
    console.log('[Auth] Auth data cleared');
  } catch (error) {
    console.error('[Auth] Error during logout:', error);
  }
}

/**
 * Check if user is authenticated
 */
export function isAuthenticated(): boolean {
  return !!getToken();
}
