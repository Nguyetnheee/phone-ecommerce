import type { CartItem } from '../types/CartItem';

export interface CreateOrderPayload {
  fullname: string;
  phone: string;
  email: string;
  address: string;
  note?: string;
  paymentMethod: 'COD' | 'BANK_TRANSFER';
  items: CartItem[];
}

export interface CreateOrderResponse {
  success: boolean;
  orderId?: string | number;
  message?: string;
  // backend may return total or other fields
  total?: number;
}

/**
 * createOrder
 *
 * Attempts to call backend order API. If backend endpoint is not available
 * the function will return a failed response. This file is a frontend-only
 * placeholder until BE-012 is provided. Do NOT treat this as a production
 * implementation. When BE-012 is ready, map the payload exactly to the
 * backend DTO and remove placeholder comments.
 */
export async function createOrder(payload: CreateOrderPayload): Promise<CreateOrderResponse> {
  try {
    const res = await fetch('/api/orders', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });

    const data = await res.json().catch(() => ({}));

    if (!res.ok) {
      const message = (data && (data.message || data.error)) ? (data.message || data.error) : 'Order creation failed';
      return { success: false, message };
    }

    // Expect backend to return at least an order id
    return { success: true, orderId: data?.orderId ?? data?.id ?? null, total: data?.total ?? undefined };
  } catch (err) {
    return { success: false, message: 'Network error. Please try again.' };
  }
}
