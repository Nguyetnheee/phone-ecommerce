import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Button from '../../components/ui/Button';
import { getProductById } from '../../services/product.service';
import type { Product } from '../../types/Product';

const currencyFormatter = new Intl.NumberFormat('vi-VN', {
  style: 'currency',
  currency: 'VND',
});

function ProductDetailPage() {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<Product | null>(null);
  const [isLoading, setIsLoading] = useState(Boolean(id));
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    async function loadProduct(productId: string) {
      try {
        const productDetail = await getProductById(productId);
        setProduct(productDetail);
      } catch {
        setErrorMessage('Product could not be loaded.');
      } finally {
        setIsLoading(false);
      }
    }

    if (id) {
      loadProduct(id);
    }
  }, [id]);

  if (isLoading) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-slate-200 bg-white p-8 text-center text-slate-600">
          Loading product...
        </div>
      </section>
    );
  }

  if (!id || errorMessage || !product) {
    return (
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-red-200 bg-red-50 p-8 text-center">
          <h1 className="text-2xl font-bold text-red-700">Product not found</h1>
          <p className="mt-3 text-sm text-red-700">
            {!id ? 'Product id is missing.' : errorMessage || 'The product you are looking for does not exist.'}
          </p>
          <Link
            to="/products"
            className="mt-6 inline-flex min-h-11 items-center justify-center rounded-md bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
          >
            Back to products
          </Link>
        </div>
      </section>
    );
  }

  const isInStock = product.stockQuantity > 0;

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <Link to="/products" className="text-sm font-semibold text-blue-600 hover:text-blue-700">
        Back to products
      </Link>

      <div className="mt-6 grid gap-8 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
        <div className="overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm">
          <div className="aspect-square bg-slate-100">
            {product.imageUrl ? (
              <img
                src={product.imageUrl}
                alt={product.name}
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full w-full items-center justify-center px-6 text-center text-sm font-semibold text-slate-500">
                No image available
              </div>
            )}
          </div>
        </div>

        <div className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            {product.brand}
          </p>
          <h1 className="mt-2 text-3xl font-bold leading-tight text-slate-950">
            {product.name}
          </h1>

          <p className="mt-4 text-2xl font-bold text-blue-600">
            {currencyFormatter.format(product.price)}
          </p>

          <div className="mt-6 grid gap-3 sm:grid-cols-2">
            <div className="rounded-lg bg-slate-100 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Storage
              </p>
              <p className="mt-1 font-semibold text-slate-950">{product.storage}</p>
            </div>
            <div className="rounded-lg bg-slate-100 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                RAM
              </p>
              <p className="mt-1 font-semibold text-slate-950">{product.ram}</p>
            </div>
            <div className="rounded-lg bg-slate-100 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Color
              </p>
              <p className="mt-1 font-semibold text-slate-950">{product.color}</p>
            </div>
            <div className="rounded-lg bg-slate-100 p-4">
              <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                Stock
              </p>
              <p className={`mt-1 font-semibold ${isInStock ? 'text-emerald-700' : 'text-red-600'}`}>
                {isInStock ? `${product.stockQuantity} available` : 'Out of stock'}
              </p>
            </div>
          </div>

          <div className="mt-6">
            <h2 className="text-lg font-bold text-slate-950">Description</h2>
            <p className="mt-2 leading-7 text-slate-600">{product.description}</p>
          </div>

          <Button type="button" className="mt-6 w-full sm:w-auto" disabled={!isInStock}>
            Add to Cart
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ProductDetailPage;
