/**
 * Auth Service (Placeholder)
 * 
 * TODO: Connect to backend auth API when BE-009/BE-010 are ready
 * - BE-009: User registration endpoint
 * - BE-010: User login endpoint
 * 
 * IMPORTANT: This service does NOT make real API calls yet.
 * It serves as a structure placeholder for UI integration testing.
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
  // token will be added when backend is ready
  // DO NOT hardcode or fake a production token
}

// Mock response delay for UI testing
const MOCK_DELAY_MS = 1000;

/**
 * Login function
 * 
 * Placeholder implementation for UI testing.
 * Backend endpoint needed: POST /api/auth/login
 * Expected request: { email: string, password: string }
 * Expected response: { token: string, user: { id, email, name } }
 */
export async function login(payload: LoginPayload): Promise<AuthResponse> {
  // Simulate network delay for UI testing
  await new Promise(resolve => setTimeout(resolve, MOCK_DELAY_MS));

  // Validate payload
  if (!payload.email || !payload.password) {
    return {
      success: false,
      message: 'Email and password are required',
    };
  }

  // TODO: Remove this mock logic and replace with real API call
  // Example of what the real implementation should look like:
  // const response = await fetch('/api/auth/login', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify(payload),
  // });
  // const data = await response.json();
  // if (data.token) {
  //   localStorage.setItem('token', data.token); // Only when API is confirmed
  // }

  // Mock validation for UI testing only
  if (payload.email === 'demo@gmail.com' && payload.password === 'demo123') {
    console.log('[AUTH SERVICE] Mock login successful - REMOVE THIS IN PRODUCTION');
    return {
      success: true,
      message: 'Login successful',
      // DO NOT return fake token - wait for real backend
    };
  }

  return {
    success: false,
    message: 'Invalid email or password',
  };
}

/**
 * Register function
 * 
 * Placeholder implementation for UI testing.
 * Backend endpoint needed: POST /api/auth/register
 * Expected request: { name, email, password }
 * Expected response: { message: string, user: { id, email, name } }
 */
export async function register(payload: RegisterPayload): Promise<AuthResponse> {
  // Simulate network delay for UI testing
  await new Promise(resolve => setTimeout(resolve, MOCK_DELAY_MS));

  // Validate payload
  if (!payload.name || !payload.email || !payload.password || !payload.confirmPassword) {
    return {
      success: false,
      message: 'All fields are required',
    };
  }

  if (payload.password !== payload.confirmPassword) {
    return {
      success: false,
      message: 'Passwords do not match',
    };
  }

  // TODO: Remove this mock logic and replace with real API call
  // Example of what the real implementation should look like:
  // const response = await fetch('/api/auth/register', {
  //   method: 'POST',
  //   headers: { 'Content-Type': 'application/json' },
  //   body: JSON.stringify({
  //     name: payload.name,
  //     email: payload.email,
  //     password: payload.password,
  //   }),
  // });
  // return await response.json();

  // Mock registration for UI testing only
  console.log('[AUTH SERVICE] Mock registration - REMOVE THIS IN PRODUCTION');
  return {
    success: true,
    message: 'Registration successful. Please login with your credentials.',
  };
}

/**
 * Logout function
 * 
 * Clears local auth state.
 * Will be enhanced when token-based auth is implemented.
 */
export function logout(): void {
  // TODO: Add logout API call when backend is ready
  // Example:
  // await fetch('/api/auth/logout', { method: 'POST' });

  // Clear mock data (no sensitive data stored yet)
  console.log('[AUTH SERVICE] Logout - no session to clear yet');

  // When token-based auth is implemented:
  // localStorage.removeItem('token');
  // localStorage.removeItem('user');
}

/**
 * Check if user is authenticated
 * 
 * Placeholder for future token validation.
 */
export function isAuthenticated(): boolean {
  // TODO: Implement when token-based auth is ready
  // return !!localStorage.getItem('token');
  return false;
}

/**
 * Get current user
 * 
 * Placeholder for future user data retrieval.
 */
export function getCurrentUser(): null {
  // TODO: Implement when token-based auth is ready
  // return JSON.parse(localStorage.getItem('user') || 'null');
  return null;
}
