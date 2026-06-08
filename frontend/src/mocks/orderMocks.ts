/**
 * Mock order data for FE-015 Order Tracking UI.
 * TODO: Replace with BE-013 order tracking API integration.
 */
import type { OrderDetails } from '../types/Order';

const orders: OrderDetails[] = [
  {
    orderInfo: {
      orderId: 'ORD-20260531-001',
      status: 'SHIPPING',
      paymentMethod: 'COD',
      total: 14500000,
      createdAt: '2026-05-31T10:15:00Z',
    },
    customerInfo: {
      fullname: 'Nguyễn Văn A',
      phone: '0912345678',
      email: 'nguyenvana@gmail.com',
    },
    shippingInfo: {
      address: '123 Đường Lê Lợi, Quận 1, TP. Hồ Chí Minh',
      note: 'Giao trong buổi chiều nếu được',
    },
    items: [
      {
        productId: 1,
        name: 'Điện thoại A',
        quantity: 1,
        unitPrice: 9000000,
        subtotal: 9000000,
      },
      {
        productId: 2,
        name: 'Ốp lưng B',
        quantity: 2,
        unitPrice: 2750000,
        subtotal: 5500000,
      },
    ],
  },
  {
    orderInfo: {
      orderId: 'ORD-20260531-002',
      status: 'DELIVERED',
      paymentMethod: 'BANK_TRANSFER',
      total: 8200000,
      createdAt: '2026-05-30T17:20:00Z',
    },
    customerInfo: {
      fullname: 'Trần Thị B',
      phone: '0987654321',
      email: 'tranthib@gmail.com',
    },
    shippingInfo: {
      address: '456 Phố Huế, Quận Hoàn Kiếm, Hà Nội',
      note: '',
    },
    items: [
      {
        productId: 3,
        name: 'Tai nghe C',
        quantity: 1,
        unitPrice: 8200000,
        subtotal: 8200000,
      },
    ],
  },
];

export function getMockOrderById(orderId: string): Promise<OrderDetails | null> {
  return new Promise((resolve) => {
    setTimeout(() => {
      const order = orders.find((item) => item.orderInfo.orderId === orderId) || null;
      resolve(order);
    }, 600);
  });
}

export function getMockStatusLabel(status: OrderDetails['orderInfo']['status']): string {
  return {
    PENDING: 'Đang chờ',
    CONFIRMED: 'Đã xác nhận',
    PROCESSING: 'Đang xử lý',
    SHIPPING: 'Đang giao hàng',
    DELIVERED: 'Đã giao',
    CANCELLED: 'Đã hủy',
  }[status];
}
