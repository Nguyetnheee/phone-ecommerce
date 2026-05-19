import type { Product } from '../../types/Product';
import Button from './Button';

interface ProductCardProps {
  product: Product;
}

const currencyFormatter = new Intl.NumberFormat('vi-VN', {
  style: 'currency',
  currency: 'VND',
});

function ProductCard({ product }: ProductCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-lg border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
      <div className="relative aspect-square bg-slate-100">
        <img
          src={product.imageUrl}
          alt={product.name}
          className="h-full w-full object-cover"
        />
        {product.badge ? (
          <span className="absolute left-3 top-3 rounded bg-blue-600 px-2.5 py-1 text-xs font-semibold text-white">
            {product.badge}
          </span>
        ) : null}
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
        <p className="mt-2 text-sm text-slate-600">
          {product.storage} {product.ram ? `- RAM ${product.ram}` : ''}
        </p>
        <Button type="button" className="mt-4 w-full">
          Thêm vào giỏ
        </Button>
      </div>
    </article>
  );
}

export default ProductCard;
