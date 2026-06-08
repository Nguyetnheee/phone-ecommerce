import { Link, useLocation } from 'react-router-dom';
import Button from '../../components/ui/Button';
import type { OrderStatus } from '../../types/Order';

const statusLabels: Record<OrderStatus, string> = {
  PENDING: 'Đang chờ',
  CONFIRMED: 'Đã xác nhận',
  PROCESSING: 'Đang xử lý',
  SHIPPING: 'Đang giao hàng',
  DELIVERED: 'Đã giao',
  CANCELLED: 'Đã hủy',
};

function OrderSuccessPage() {
  const { state } = useLocation();
  const orderId = state?.orderId ?? null;
  const total = state?.total ?? null;
  const paymentMethod = state?.paymentMethod ?? null;
  const status: OrderStatus = state?.status ?? 'PENDING';

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-4xl">
        <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
          <div className="text-center">
            <h1 className="text-3xl font-semibold text-slate-950">Đặt hàng thành công</h1>
            <p className="mt-3 text-slate-600">Cảm ơn bạn đã đặt hàng. Đơn hàng của bạn đang được xử lý.</p>
          </div>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Mã đơn hàng</p>
              <p className="mt-3 text-xl font-semibold text-slate-950">{orderId ?? '---'}</p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Trạng thái đơn</p>
              <p className="mt-3 inline-flex rounded-full bg-emerald-100 px-4 py-2 text-sm font-semibold text-emerald-700">
                {statusLabels[status] ?? status}
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Tổng tiền</p>
              <p className="mt-3 text-xl font-semibold text-slate-950">
                {typeof total === 'number' ? new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(total) : '---'}
              </p>
            </div>
            <div className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Phương thức thanh toán</p>
              <p className="mt-3 text-xl font-semibold text-slate-950">{paymentMethod === 'COD' ? 'COD' : paymentMethod === 'BANK_TRANSFER' ? 'Chuyển khoản ngân hàng' : '---'}</p>
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link to="/products">
              <Button type="button">Tiếp tục mua sắm</Button>
            </Link>
            {orderId && (
              <Link to={`/orders/${orderId}`}>
                <Button type="button" variant="outline">Xem chi tiết đơn hàng</Button>
              </Link>
            )}
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600">
            <p className="font-medium text-slate-900">Ghi chú:</p>
            <p className="mt-2">Thông tin hiển thị dựa trên dữ liệu giả lập giao diện. TODO: Kết nối BE-013 để lấy dữ liệu đơn hàng thực tế.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderSuccessPage;
