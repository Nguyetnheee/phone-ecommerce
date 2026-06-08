/**
 * useCart hook
 * Manages shopping cart state, localStorage persistence, and cart operations
 * This is a custom hook that can be used in any component
 */

import { useState, useEffect, useCallback } from 'react';
import type { CartItem } from '../types/CartItem';
import type { Product } from '../types/Product';
import { loadCartFromStorage, saveCartToStorage, clearCartFromStorage } from '../utils/localStorage';

export interface UseCartReturn {
  items: CartItem[];
  totalPrice: number;
  totalItems: number;
  addItem: (product: Product) => void;
  removeItem: (productId: number) => void;
  updateQuantity: (productId: number, quantity: number) => void;
  clearCart: () => void;
}

/**
 * Custom hook for managing cart state with localStorage persistence
 */
export function useCart(): UseCartReturn {
  const [items, setItems] = useState<CartItem[]>([]);
  const [isHydrated, setIsHydrated] = useState(false);

  // Load cart from localStorage on component mount
  useEffect(() => {
    console.log('[useCart] Loading cart from localStorage');
    const savedCart = loadCartFromStorage();
    console.log('[useCart] Loaded cart:', savedCart);
    setItems(savedCart);
    setIsHydrated(true);
  }, []);

  // Persist cart to localStorage whenever items change (after hydration)
  useEffect(() => {
    if (isHydrated) {
      console.log('[useCart] Saving cart to localStorage:', items);
      saveCartToStorage(items);
    }
  }, [items, isHydrated]);

  // Calculate totals
  const totalPrice = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);

  /**
   * Add product to cart
   * If product already exists, increase quantity
   * Checks if stock is available
   */
  const addItem = useCallback((product: Product) => {
    console.log('[useCart] addItem called with product:', product);
    setItems((prevItems) => {
      // Check if product already exists in cart
      const existingItem = prevItems.find((item) => item.productId === product.id);

      if (existingItem) {
        // Product exists - check if can increase quantity
        if (existingItem.quantity >= product.stockQuantity) {
          console.log('[useCart] Cannot add more - stock limit reached:', product.stockQuantity);
          return prevItems; // Don't add if already at stock limit
        }
        console.log('[useCart] Product exists, increasing quantity from', existingItem.quantity);
        return prevItems.map((item) =>
          item.productId === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }

      // Product doesn't exist - check if stock is available
      if (product.stockQuantity <= 0) {
        console.log('[useCart] Cannot add - product out of stock');
        return prevItems; // Don't add if out of stock
      }

      // Add as new item
      console.log('[useCart] Adding new item to cart');
      const newItem: CartItem = {
        productId: product.id,
        name: product.name,
        brand: product.brand,
        price: product.price,
        imageUrl: product.imageUrl,
        quantity: 1,
        storage: product.storage,
        ram: product.ram,
        stock: product.stockQuantity,
      };

      return [...prevItems, newItem];
    });
  }, []);

  /**
   * Remove product from cart completely
   */
  const removeItem = useCallback((productId: number) => {
    setItems((prevItems) => prevItems.filter((item) => item.productId !== productId));
  }, []);

  /**
   * Update product quantity in cart
   * If quantity is 0 or less, remove the item
   * Checks if quantity doesn't exceed available stock
   */
  const updateQuantity = useCallback((productId: number, quantity: number) => {
    if (quantity < 1) {
      // Invalid quantity - remove item
      removeItem(productId);
      return;
    }

    setItems((prevItems) =>
      prevItems.map((item) => {
        if (item.productId === productId) {
          // Check if quantity exceeds stock
          const newQuantity = Math.min(quantity, item.stock);
          if (newQuantity < quantity) {
            console.log('[useCart] Quantity capped at stock limit:', item.stock);
          }
          return { ...item, quantity: newQuantity };
        }
        return item;
      })
    );
  }, [removeItem]);

  /**
   * Clear all items from cart
   */
  const clearCart = useCallback(() => {
    setItems([]);
    clearCartFromStorage();
  }, []);

  return {
    items,
    totalPrice,
    totalItems,
    addItem,
    removeItem,
    updateQuantity,
    clearCart,
  };
}
