/**
 * CartItem represents a product in the shopping cart
 * Extends product data with quantity information
 */
export interface CartItem {
  productId: number;
  name: string;
  brand?: string;
  price: number;
  imageUrl?: string;
  quantity: number;
  storage?: string;
  ram?: string;
  stock: number;
}

/**
 * Cart state structure
 */
export interface Cart {
  items: CartItem[];
  totalPrice: number;
  totalItems: number;
}
