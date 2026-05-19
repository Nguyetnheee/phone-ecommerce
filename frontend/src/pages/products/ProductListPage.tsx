import { useEffect, useMemo, useState } from 'react';
import ProductCard from '../../components/ui/ProductCard';
import { getAllProducts } from '../../services/product.service';
import type { Product } from '../../types/Product';

function ProductListPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedBrand, setSelectedBrand] = useState('all');

  useEffect(() => {
    async function loadProducts() {
      try {
        const productList = await getAllProducts();
        setProducts(productList);
      } catch {
        setErrorMessage('Unable to load products. Please check that the backend is running.');
      } finally {
        setIsLoading(false);
      }
    }

    loadProducts();
  }, []);

  const brands = useMemo(() => {
    const uniqueBrands = new Set(products.map((product) => product.brand));
    return Array.from(uniqueBrands).sort();
  }, [products]);

  const filteredProducts = useMemo(() => {
    const normalizedSearch = searchTerm.trim().toLowerCase();

    return products.filter((product) => {
      const matchesSearch =
        product.name.toLowerCase().includes(normalizedSearch) ||
        product.brand.toLowerCase().includes(normalizedSearch);
      const matchesBrand = selectedBrand === 'all' || product.brand === selectedBrand;

      return matchesSearch && matchesBrand;
    });
  }, [products, searchTerm, selectedBrand]);

  return (
    <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            Products
          </p>
          <h1 className="mt-2 text-3xl font-bold text-slate-950">
            Phone catalog
          </h1>
        </div>
        <p className="text-sm text-slate-600">
          {products.length} products available
        </p>
      </div>

      <div className="mt-6 grid gap-3 rounded-lg border border-slate-200 bg-white p-4 shadow-sm md:grid-cols-[1fr_220px]">
        <label className="block">
          <span className="text-sm font-semibold text-slate-700">Search</span>
          <input
            type="search"
            value={searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
            placeholder="Search by product name or brand"
            className="mt-2 min-h-11 w-full rounded-md border border-slate-300 px-3 text-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          />
        </label>

        <label className="block">
          <span className="text-sm font-semibold text-slate-700">Brand</span>
          <select
            value={selectedBrand}
            onChange={(event) => setSelectedBrand(event.target.value)}
            className="mt-2 min-h-11 w-full rounded-md border border-slate-300 bg-white px-3 text-sm outline-none transition focus:border-blue-600 focus:ring-2 focus:ring-blue-100"
          >
            <option value="all">All brands</option>
            {brands.map((brand) => (
              <option key={brand} value={brand}>
                {brand}
              </option>
            ))}
          </select>
        </label>
      </div>

      {isLoading ? (
        <div className="mt-8 rounded-lg border border-slate-200 bg-white p-8 text-center text-slate-600">
          Loading products...
        </div>
      ) : null}

      {!isLoading && errorMessage ? (
        <div className="mt-8 rounded-lg border border-red-200 bg-red-50 p-8 text-center text-red-700">
          {errorMessage}
        </div>
      ) : null}

      {!isLoading && !errorMessage && products.length === 0 ? (
        <div className="mt-8 rounded-lg border border-slate-200 bg-white p-8 text-center text-slate-600">
          No products are available yet.
        </div>
      ) : null}

      {!isLoading && !errorMessage && products.length > 0 && filteredProducts.length === 0 ? (
        <div className="mt-8 rounded-lg border border-slate-200 bg-white p-8 text-center text-slate-600">
          No products match your search.
        </div>
      ) : null}

      {!isLoading && !errorMessage && filteredProducts.length > 0 ? (
        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      ) : null}
    </section>
  );
}

export default ProductListPage;
