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
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(100000000);

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

      const matchesPrice = product.price >= minPrice && product.price <= maxPrice;

      return matchesSearch && matchesBrand && matchesPrice;
    });
  }, [products, searchTerm, selectedBrand, minPrice, maxPrice]);

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
          Danh sách sản phẩm
        </p>
        <h1 className="mt-2 text-3xl font-bold text-slate-950">
          Tất cả điện thoại
        </h1>
      </div>

      {/* Filters Section */}
      <div className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {/* Search Input */}
            <div className="flex flex-col">
              <label htmlFor="search" className="block text-sm font-semibold text-slate-700">
                Tìm kiếm
              </label>
              <input
                id="search"
                type="text"
                placeholder="Tên sản phẩm hoặc thương hiệu"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="mt-3 flex-1 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            {/* Brand Filter */}
            <div className="flex flex-col">
              <label htmlFor="brand" className="block text-sm font-semibold text-slate-700">
                Thương hiệu
              </label>
              <select
                id="brand"
                value={selectedBrand}
                onChange={(e) => setSelectedBrand(e.target.value)}
                className="mt-3 flex-1 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              >
                <option value="all">Tất cả thương hiệu</option>
                {brands.map((brand) => (
                  <option key={brand} value={brand}>
                    {brand}
                  </option>
                ))}
              </select>
            </div>

            {/* Min Price Filter */}
            <div className="flex flex-col">
              <label htmlFor="minPrice" className="block text-sm font-semibold text-slate-700">
                Giá tối thiểu (VND)
              </label>
              <input
                id="minPrice"
                type="number"
                value={minPrice}
                onChange={(e) => setMinPrice(Number(e.target.value))}
                className="mt-3 flex-1 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>

            {/* Max Price Filter */}
            <div className="flex flex-col">
              <label htmlFor="maxPrice" className="block text-sm font-semibold text-slate-700">
                Giá tối đa (VND)
              </label>
              <input
                id="maxPrice"
                type="number"
                value={maxPrice}
                onChange={(e) => setMaxPrice(Number(e.target.value))}
                className="mt-3 flex-1 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm text-slate-900 shadow-sm transition focus:border-blue-500 focus:outline-none focus:ring-1 focus:ring-blue-500"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        {isLoading ? (
          <div className="rounded-lg border border-slate-200 bg-white p-8 text-center text-slate-600">
            Loading products...
          </div>
        ) : !errorMessage && filteredProducts.length > 0 ? (
          <div>
            <p className="mb-6 text-sm text-slate-600">
              Tìm thấy <span className="font-semibold">{filteredProducts.length}</span> sản phẩm
            </p>
            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
              {filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        ) : !isLoading && !errorMessage && products.length === 0 ? (
          <div className="rounded-lg border border-slate-200 bg-white p-8 text-center text-slate-600">
            No products are available yet.
          </div>
        ) : !isLoading && !errorMessage && filteredProducts.length === 0 ? (
          <div className="rounded-lg border border-slate-200 bg-white p-12 text-center">
            <p className="text-lg font-semibold text-slate-950">Không tìm thấy sản phẩm</p>
            <p className="mt-2 text-slate-600">
              Hãy thử thay đổi các tiêu chí tìm kiếm của bạn
            </p>
          </div>
        ) : !isLoading && errorMessage ? (
          <div className="rounded-lg border border-red-200 bg-red-50 p-8 text-center text-red-700">
            {errorMessage}
          </div>
        ) : null}
      </div>
    </div>
  );
}

export default ProductListPage;
