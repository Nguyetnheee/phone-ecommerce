import { useLocation, Link } from 'react-router-dom';
import Button from '../../components/ui/Button';

function OrderSuccessPage() {
  const { state } = useLocation();
  const orderId = state?.orderId ?? null;
  const total = state?.total ?? null;
  const paymentMethod = state?.paymentMethod ?? null;

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="rounded-lg border border-slate-200 bg-white p-12 text-center">
          <h1 className="text-2xl font-bold text-slate-950">Đặt hàng thành công</h1>
          {orderId ? (
            <p className="mt-4 text-slate-600">Mã đơn hàng của bạn: <strong className="text-slate-900">{orderId}</strong></p>
          ) : (
            <p className="mt-4 text-slate-600">Đơn hàng đã được gửi thành công.</p>
          )}

          {total !== null && (
            <p className="mt-2 text-slate-600">Tổng (thông tin): <strong className="text-slate-900">{new Intl.NumberFormat('vi-VN', {style:'currency',currency:'VND'}).format(total)}</strong></p>
          )}

          {paymentMethod && (
            <p className="mt-2 text-slate-600">Phương thức thanh toán: <strong className="text-slate-900">{paymentMethod}</strong></p>
          )}

          <div className="mt-6">
            <Link to="/products">
              <Button type="button">Tiếp tục mua sắm</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderSuccessPage;
