import { Link } from 'react-router-dom';
import type { Product } from '../../types/Product';

interface ProductCardProps {
  product: Product;
}

const currencyFormatter = new Intl.NumberFormat('vi-VN', {
  style: 'currency',
  currency: 'VND',
});

function ProductCard({ product }: ProductCardProps) {
  const isInStock = product.stockQuantity > 0;

  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="relative aspect-square bg-slate-100">
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

        <span className="absolute left-3 top-3 rounded bg-blue-600 px-2.5 py-1 text-xs font-semibold text-white">
          {product.brand}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-4">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          {product.brand}
        </p>
        <h3 className="mt-1 min-h-12 text-base font-semibold text-slate-950">
          {product.name}
        </h3>

        <p className="mt-3 text-lg font-bold text-blue-600">
          {currencyFormatter.format(product.price)}
        </p>

        <div className="mt-3 grid grid-cols-2 gap-2 text-sm text-slate-600">
          <span className="rounded bg-slate-100 px-2.5 py-1">
            {product.storage}
          </span>
          <span className="rounded bg-slate-100 px-2.5 py-1">
            RAM {product.ram}
          </span>
          <span className="col-span-2 rounded bg-slate-100 px-2.5 py-1">
            Color: {product.color}
          </span>
        </div>

        <p
          className={`mt-3 text-sm font-semibold ${
            isInStock ? 'text-emerald-700' : 'text-red-600'
          }`}
        >
          {isInStock ? `In stock: ${product.stockQuantity}` : 'Out of stock'}
        </p>

        <Link
          to={`/products/${product.id}`}
          className="mt-4 inline-flex min-h-11 items-center justify-center rounded-md bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-blue-700"
        >
          View detail
        </Link>
      </div>
    </article>
  );
}

export default ProductCard;
