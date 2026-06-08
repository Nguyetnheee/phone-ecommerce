import { useEffect, useMemo, useState } from 'react';
import Button from '../../components/ui/Button';
import ProductCard from '../../components/ui/ProductCard';
import { getAllProducts } from '../../services/product.service';
import type { Product } from '../../types/Product';

const categories = ['iPhone', 'Samsung', 'Xiaomi', 'OPPO', 'Điện thoại gaming', 'Phụ kiện'];

const policies = [
  'Chính sách bảo hành',
  'Chính sách đổi trả',
  'Thông tin liên hệ',
  'Điều khoản mua hàng',
];

function HomePage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    async function loadProducts() {
      try {
        const productList = await getAllProducts();
        setProducts(productList);
      } catch {
        setErrorMessage('Không thể tải sản phẩm. Vui lòng kiểm tra backend đang chạy.');
      } finally {
        setIsLoading(false);
      }
    }

    loadProducts();
  }, []);

  const featuredProducts = useMemo(() => products.slice(0, 4), [products]);

  return (
    <div>
      <section className="bg-white">
        <div className="mx-auto grid max-w-7xl gap-10 px-4 py-10 sm:px-6 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:px-8 lg:py-16">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
              Phone Ecommerce
            </p>
            <h1 className="mt-3 text-4xl font-bold leading-tight text-slate-950 sm:text-5xl">
              Mua điện thoại chính hãng dễ dàng hơn
            </h1>
            <p className="mt-4 max-w-2xl text-base leading-7 text-slate-600">
              Khám phá các mẫu điện thoại mới, so sánh cấu hình nhanh và bắt đầu hành trình mua sắm với giao diện rõ ràng.
            </p>
            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <Button type="button">Xem sản phẩm nổi bật</Button>
              <Button type="button" variant="outline">
                Xem khuyến mãi
              </Button>
            </div>
          </div>

          <div className="rounded-lg bg-slate-950 p-4 text-white shadow-xl">
            <div className="rounded-md bg-white p-4 text-slate-900">
              <div className="aspect-[4/3] rounded-md bg-gradient-to-br from-blue-100 via-slate-100 to-emerald-100 p-6">
                <div className="flex h-full items-center justify-center">
                  <div className="h-52 w-28 rounded-[2rem] border-8 border-slate-900 bg-white shadow-2xl">
                    <div className="mx-auto mt-3 h-3 w-12 rounded-full bg-slate-900" />
                    <div className="mx-3 mt-5 h-28 rounded-lg bg-blue-100" />
                    <div className="mx-5 mt-5 h-3 rounded bg-slate-200" />
                    <div className="mx-7 mt-3 h-3 rounded bg-slate-200" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-y border-slate-200 bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
          <div className="flex min-h-12 items-center rounded-lg border border-slate-300 bg-white px-4 text-sm text-slate-500 shadow-sm">
            Tìm kiếm theo tên sản phẩm, thương hiệu, dung lượng...
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between gap-4">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
              Danh mục
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950">
              Featured categories
            </h2>
          </div>
        </div>
        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
          {categories.map((category) => (
            <div
              key={category}
              className="rounded-lg border border-slate-200 bg-white px-4 py-5 text-center text-sm font-semibold text-slate-800 shadow-sm"
            >
              {category}
            </div>
          ))}
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-4 pb-10 sm:px-6 lg:px-8">
        <div>
          <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
            Sản phẩm
          </p>
          <h2 className="mt-2 text-2xl font-bold text-slate-950">
            Featured products
          </h2>
        </div>

        {isLoading ? (
          <div className="mt-6 rounded-lg border border-slate-200 bg-white p-8 text-center text-slate-600">
            Đang tải sản phẩm từ database...
          </div>
        ) : null}

        {!isLoading && errorMessage ? (
          <div className="mt-6 rounded-lg border border-red-200 bg-red-50 p-8 text-center text-red-700">
            {errorMessage}
          </div>
        ) : null}

        {!isLoading && !errorMessage && featuredProducts.length === 0 ? (
          <div className="mt-6 rounded-lg border border-slate-200 bg-white p-8 text-center text-slate-600">
            Chưa có sản phẩm nào trong database.
          </div>
        ) : null}

        {!isLoading && !errorMessage && featuredProducts.length > 0 ? (
          <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : null}
      </section>

      <section className="bg-white">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
              Tin cậy
            </p>
            <h2 className="mt-2 text-2xl font-bold text-slate-950">
              Chính sách và hỗ trợ mua hàng
            </h2>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {policies.map((policy) => (
              <div key={policy} className="rounded-lg border border-slate-200 p-5">
                <h3 className="font-semibold text-slate-950">{policy}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">
                  Nội dung chi tiết sẽ được cập nhật ở các trang chính sách trong những bước tiếp theo.
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
