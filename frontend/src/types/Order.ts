/**
 * Order types used by order tracking and success pages.
 */
export type OrderStatus = 'PENDING' | 'CONFIRMED' | 'PROCESSING' | 'SHIPPING' | 'DELIVERED' | 'CANCELLED';

export interface OrderItem {
  productId: number;
  name: string;
  quantity: number;
  unitPrice: number;
  subtotal: number;
}

export interface CustomerInfo {
  fullname: string;
  phone: string;
  email: string;
}

export interface ShippingInfo {
  address: string;
  note?: string;
}

export interface OrderSummary {
  orderId: string;
  status: OrderStatus;
  paymentMethod: 'COD' | 'BANK_TRANSFER';
  total: number;
  createdAt: string;
}

export interface OrderDetails {
  orderInfo: OrderSummary;
  customerInfo: CustomerInfo;
  shippingInfo: ShippingInfo;
  items: OrderItem[];
}
