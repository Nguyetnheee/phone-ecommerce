import type { Product } from '../types/Product';

export const mockProducts: Product[] = [
  {
    id: 1,
    name: 'iPhone 15 Pro Max',
    brand: 'Apple',
    price: 29990000,
    imageUrl:
      'https://images.unsplash.com/photo-1695048133142-1a20484d2569?auto=format&fit=crop&w=600&q=80',
    storage: '256GB',
    ram: '8GB',
    badge: 'Bán chạy',
  },
  {
    id: 2,
    name: 'Samsung Galaxy S24 Ultra',
    brand: 'Samsung',
    price: 26990000,
    imageUrl:
      'https://images.unsplash.com/photo-1705585174958-65f404a26c4d?auto=format&fit=crop&w=600&q=80',
    storage: '256GB',
    ram: '12GB',
    badge: 'Mới',
  },
  {
    id: 3,
    name: 'Xiaomi 14',
    brand: 'Xiaomi',
    price: 18990000,
    imageUrl:
      'https://images.unsplash.com/photo-1598327105666-5b89351aff97?auto=format&fit=crop&w=600&q=80',
    storage: '512GB',
    ram: '12GB',
  },
  {
    id: 4,
    name: 'OPPO Reno11 F',
    brand: 'OPPO',
    price: 8990000,
    imageUrl:
      'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?auto=format&fit=crop&w=600&q=80',
    storage: '256GB',
    ram: '8GB',
  },
];
