/**
 * Authentication utilities for managing user sessions
 */

export interface User {
  id: string;
  email: string;
  user_metadata: {
    display_name?: string;
    [key: string]: any;
  };
  created_at: string;
  updated_at?: string;
  email_confirmed_at?: string;
}

export interface Session {
  access_token: string;
  refresh_token: string;
  user: User;
}

/**
 * Get current user session from localStorage
 */
export function getSession(): Session | null {
  if (typeof window === 'undefined') return null;
  
  try {
    const accessToken = localStorage.getItem('access_token');
    const refreshToken = localStorage.getItem('refresh_token');
    const userStr = localStorage.getItem('user');
    
    if (!accessToken || !refreshToken || !userStr) {
      return null;
    }
    
    const user = JSON.parse(userStr);
    
    return {
      access_token: accessToken,
      refresh_token: refreshToken,
      user
    };
  } catch (error) {
    console.error('Error getting session:', error);
    return null;
  }
}

/**
 * Get current user from session
 */
export function getCurrentUser(): User | null {
  const session = getSession();
  return session?.user || null;
}

/**
 * Check if user is logged in
 */
export function isLoggedIn(): boolean {
  return getSession() !== null;
}

/**
 * Save session to localStorage
 */
export function saveSession(accessToken: string, refreshToken: string, user: User): void {
  if (typeof window === 'undefined') return;
  
  localStorage.setItem('access_token', accessToken);
  localStorage.setItem('refresh_token', refreshToken);
  localStorage.setItem('user', JSON.stringify(user));
}

/**
 * Clear session from localStorage
 */
export function clearSession(): void {
  if (typeof window === 'undefined') return;
  
  localStorage.removeItem('access_token');
  localStorage.removeItem('refresh_token');
  localStorage.removeItem('user');
}

/**
 * Sign out user
 */
export async function signOut(): Promise<void> {
  // Import Supabase client dynamically
  const { supabase } = await import('./supabase');
  
  try {
    await supabase.auth.signOut();
  } catch (error) {
    console.error('Error signing out:', error);
  } finally {
    clearSession();
    window.location.href = '/';
  }
}
