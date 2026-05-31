import { useCartContext } from '../../context/CartContext';
import Button from '../../components/ui/Button';
import { Link } from 'react-router-dom';

const currencyFormatter = new Intl.NumberFormat('vi-VN', {
  style: 'currency',
  currency: 'VND',
});

function CartPage() {
  const { items, totalPrice, removeItem, updateQuantity } = useCartContext();

  const handleQuantityChange = (productId: number, newQuantity: number) => {
    if (newQuantity < 1) {
      // Prevent invalid quantity
      return;
    }
    updateQuantity(productId, newQuantity);
  };

  const handleRemoveItem = (productId: number) => {
    removeItem(productId);
  };

  if (items.length === 0) {
    return (
      <div className="min-h-screen bg-slate-50">
        {/* Header */}
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-slate-950">Giỏ hàng</h1>
        </div>

        {/* Empty Cart State */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg border border-slate-200 bg-white p-12 text-center">
            <svg
              className="mx-auto h-12 w-12 text-slate-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z"
              />
            </svg>
            <h2 className="mt-4 text-lg font-semibold text-slate-950">
              Giỏ hàng trống
            </h2>
            <p className="mt-2 text-slate-600">
              Hãy thêm một số sản phẩm để bắt đầu mua sắm
            </p>
            <Link to="/products">
              <Button type="button" className="mt-6">
                Tiếp tục mua sắm
              </Button>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-950">Giỏ hàng</h1>
        <p className="mt-2 text-slate-600">
          {items.length} sản phẩm trong giỏ hàng
        </p>
      </div>

      {/* Cart Content */}
      <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Cart Items */}
          <div className="lg:col-span-2">
            <div className="space-y-4 rounded-lg border border-slate-200 bg-white p-6">
              {items.map((item) => (
                <div
                  key={item.productId}
                  className="flex gap-4 border-b border-slate-200 pb-4 last:border-0 last:pb-0"
                >
                  {/* Product Image */}
                  {item.imageUrl && (
                    <div className="h-24 w-24 flex-shrink-0 bg-slate-100 rounded-lg overflow-hidden">
                      <img
                        src={item.imageUrl}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  )}

                  {/* Product Info */}
                  <div className="flex-1">
                    <div className="flex justify-between gap-4">
                      <div className="flex-1">
                        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
                          {item.brand}
                        </p>
                        <h3 className="mt-1 text-base font-semibold text-slate-950">
                          {item.name}
                        </h3>
                        {(item.storage || item.ram) && (
                          <p className="mt-1 text-sm text-slate-600">
                            {item.storage} {item.ram ? `- RAM ${item.ram}` : ''}
                          </p>
                        )}
                        <p className="mt-2 text-lg font-bold text-blue-600">
                          {currencyFormatter.format(item.price)}
                        </p>
                      </div>

                      {/* Price */}
                      <div className="text-right">
                        <p className="text-sm text-slate-600">Cộng:</p>
                        <p className="text-lg font-bold text-slate-950">
                          {currencyFormatter.format(item.price * item.quantity)}
                        </p>
                      </div>
                    </div>

                    {/* Quantity Controls and Remove */}
                    <div className="mt-4 flex items-center justify-between gap-4">
                      {/* Quantity Control */}
                      <div className="flex items-center gap-2 rounded-lg border border-slate-300 bg-slate-50 p-1">
                        <button
                          onClick={() =>
                            handleQuantityChange(item.productId, item.quantity - 1)
                          }
                          className="h-8 w-8 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-white transition-colors rounded"
                          aria-label="Decrease quantity"
                        >
                          −
                        </button>
                        <span className="w-8 text-center font-semibold text-slate-900">
                          {item.quantity}
                        </span>
                        <button
                          onClick={() =>
                            handleQuantityChange(item.productId, item.quantity + 1)
                          }
                          className="h-8 w-8 flex items-center justify-center text-slate-600 hover:text-slate-900 hover:bg-white transition-colors rounded"
                          aria-label="Increase quantity"
                        >
                          +
                        </button>
                      </div>

                      {/* Remove Button */}
                      <button
                        onClick={() => handleRemoveItem(item.productId)}
                        className="inline-flex items-center gap-2 px-4 py-2 text-sm font-medium text-red-600 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors"
                      >
                        <svg
                          className="h-4 w-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                          />
                        </svg>
                        Xóa
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Continue Shopping */}
            <div className="mt-6">
              <Link to="/products">
                <Button type="button" variant="outline">
                  ← Tiếp tục mua sắm
                </Button>
              </Link>
            </div>
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="rounded-lg border border-slate-200 bg-white p-6">
              <h2 className="text-lg font-bold text-slate-950">
                Tóm tắt đơn hàng
              </h2>

              {/* Summary Items */}
              <div className="mt-6 space-y-4">
                {items.map((item) => (
                  <div
                    key={item.productId}
                    className="flex justify-between text-sm text-slate-600"
                  >
                    <span>
                      {item.name} x {item.quantity}
                    </span>
                    <span className="font-semibold text-slate-900">
                      {currencyFormatter.format(item.price * item.quantity)}
                    </span>
                  </div>
                ))}
              </div>

              {/* Divider */}
              <div className="my-6 border-t border-slate-200" />

              {/* Total */}
              <div className="flex justify-between">
                <span className="text-base font-semibold text-slate-950">
                  Tổng cộng:
                </span>
                <span className="text-lg font-bold text-blue-600">
                  {currencyFormatter.format(totalPrice)}
                </span>
              </div>

              {/* Checkout Button */}
              <div className="mt-6">
                <Link to="/checkout">
                  <Button type="button">Thanh toán</Button>
                </Link>
              </div>

              {/* Info Text */}
              <p className="mt-4 text-xs text-slate-500 text-center">
                Tính năng thanh toán sẽ được kích hoạt khi hệ thống sẵn sàng
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CartPage;
