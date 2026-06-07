/**
 * CartContext and CartProvider
 * Provides cart state globally across the app
 * Allows any component to access and modify cart without prop drilling
 */

import { createContext, useContext, useMemo } from 'react';
import type { ReactNode } from 'react';
import type { UseCartReturn } from '../hooks/useCart';
import { useCart } from '../hooks/useCart';

// Create cart context
const CartContext = createContext<UseCartReturn | undefined>(undefined);

/**
 * CartProvider component
 * Wrap your app with this provider to enable cart functionality everywhere
 */
export function CartProvider({ children }: { children: ReactNode }) {
  console.log('[CartProvider] Initializing CartProvider');
  const cart = useCart();

  // Memoize the context value to prevent unnecessary re-renders of consumers
  const value = useMemo(() => cart, [
    cart.items,
    cart.totalPrice,
    cart.totalItems,
    cart.addItem,
    cart.removeItem,
    cart.updateQuantity,
    cart.clearCart,
  ]);

  console.log('[CartProvider] Cart state:', value);

  return (
    <CartContext.Provider value={value}>
      {children}
    </CartContext.Provider>
  );
}

/**
 * useCartContext hook
 * Use this hook in any component to access cart state and functions
 * Must be used within a CartProvider
 */
export function useCartContext(): UseCartReturn {
  const context = useContext(CartContext);

  if (!context) {
    throw new Error('useCartContext must be used within a CartProvider');
  }

  return context;
}
