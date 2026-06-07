/**
 * localStorage utility functions
 * Safely handles reading/writing to browser storage with error handling
 */

import type { CartItem } from '../types/CartItem';

const CART_STORAGE_KEY = 'phone_ecommerce_cart';

/**
 * Load cart items from localStorage
 * Returns empty array if localStorage is empty, invalid, or corrupted
 */
export function loadCartFromStorage(): CartItem[] {
  try {
    const stored = localStorage.getItem(CART_STORAGE_KEY);
    
    if (!stored) {
      return [];
    }
    
    const parsed = JSON.parse(stored);
    
    // Validate that it's an array
    if (!Array.isArray(parsed)) {
      console.warn('[Cart Storage] Invalid cart data format, resetting to empty');
      return [];
    }
    
    // Basic validation of cart items
    const validItems = parsed.filter((item: unknown) => {
      return (
        typeof item === 'object' &&
        item !== null &&
        'productId' in item &&
        'name' in item &&
        'price' in item &&
        'quantity' in item
      );
    });
    
    return validItems as CartItem[];
  } catch (error) {
    console.error('[Cart Storage] Error loading cart from localStorage:', error);
    return [];
  }
}

/**
 * Save cart items to localStorage
 * Silently handles errors to prevent UI crashes
 */
export function saveCartToStorage(items: CartItem[]): boolean {
  try {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
    return true;
  } catch (error) {
    console.error('[Cart Storage] Error saving cart to localStorage:', error);
    // Storage quota exceeded or private browsing mode - silently fail
    return false;
  }
}

/**
 * Clear cart from localStorage
 */
export function clearCartFromStorage(): void {
  try {
    localStorage.removeItem(CART_STORAGE_KEY);
  } catch (error) {
    console.error('[Cart Storage] Error clearing cart from localStorage:', error);
  }
}
