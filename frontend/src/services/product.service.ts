import type { Product } from '../types/Product';

const API_BASE_URL = 'http://localhost:8080/api';

async function requestJson<T>(url: string): Promise<T> {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`Request failed with status ${response.status}`);
  }

  return response.json() as Promise<T>;
}

export function getAllProducts(): Promise<Product[]> {
  return requestJson<Product[]>(`${API_BASE_URL}/products`);
}

export function getProductById(id: number | string): Promise<Product> {
  return requestJson<Product>(`${API_BASE_URL}/products/${id}`);
}
