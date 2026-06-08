import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import type { OrderDetails, OrderStatus } from '../../types/Order';
import { getMockOrderById, getMockStatusLabel } from '../../mocks/orderMocks';
import Button from '../../components/ui/Button';

const statusSteps: OrderStatus[] = ['PENDING', 'CONFIRMED', 'PROCESSING', 'SHIPPING', 'DELIVERED', 'CANCELLED'];

function statusColor(status: OrderStatus) {
  switch (status) {
    case 'PENDING':
      return 'bg-slate-100 text-slate-700';
    case 'CONFIRMED':
      return 'bg-blue-100 text-blue-700';
    case 'PROCESSING':
      return 'bg-indigo-100 text-indigo-700';
    case 'SHIPPING':
      return 'bg-amber-100 text-amber-700';
    case 'DELIVERED':
      return 'bg-emerald-100 text-emerald-700';
    case 'CANCELLED':
      return 'bg-red-100 text-red-700';
    default:
      return 'bg-slate-100 text-slate-700';
  }
}

function OrderTrackingPage() {
  const { orderId } = useParams<{ orderId: string }>();
  const navigate = useNavigate();
  const [order, setOrder] = useState<OrderDetails | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    if (!orderId) {
      setError('Order ID is missing.');
      setLoading(false);
      return;
    }

    setLoading(true);
    setError('');

    getMockOrderById(orderId)
      .then((result) => {
        if (!result) {
          setError('Không tìm thấy đơn hàng.');
        } else {
          setOrder(result);
        }
      })
      .catch(() => {
        setError('Lỗi khi tải thông tin đơn hàng. Vui lòng thử lại.');
      })
      .finally(() => {
        setLoading(false);
      });
  }, [orderId]);

  if (loading) {
    return (
      <div className="min-h-screen bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
          <div className="animate-pulse">
            <div className="h-8 w-3/5 rounded-full bg-slate-200" />
            <div className="mt-8 space-y-4">
              <div className="h-24 rounded-2xl bg-slate-200" />
              <div className="h-20 rounded-2xl bg-slate-200" />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-10 shadow-sm text-center">
          <h1 className="text-2xl font-semibold text-slate-950">Lỗi đơn hàng</h1>
          <p className="mt-4 text-slate-600">{error}</p>
          <div className="mt-8 flex justify-center">
            <Button type="button" onClick={() => navigate('/products')}>Quay lại sản phẩm</Button>
          </div>
        </div>
      </div>
    );
  }

  if (!order) {
    return (
      <div className="min-h-screen bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl rounded-3xl border border-slate-200 bg-white p-10 shadow-sm text-center">
          <h1 className="text-2xl font-semibold text-slate-950">Đơn hàng không tồn tại</h1>
          <p className="mt-4 text-slate-600">Không tìm thấy thông tin đơn hàng với mã này.</p>
          <div className="mt-8 flex justify-center">
            <Button type="button" onClick={() => navigate('/products')}>Tiếp tục mua sắm</Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-slate-50 px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="rounded-3xl border border-slate-200 bg-white p-10 shadow-sm">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.2em] text-slate-500">Theo dõi đơn hàng</p>
              <h1 className="mt-3 text-3xl font-semibold text-slate-950">{order.orderInfo.orderId}</h1>
            </div>
            <div className="inline-flex items-center gap-3 rounded-full bg-slate-100 px-4 py-2 text-sm font-semibold text-slate-700">
              <span className="h-2.5 w-2.5 rounded-full bg-slate-500" />
              {getMockStatusLabel(order.orderInfo.status)}
            </div>
          </div>

          <div className="mt-8 space-y-3">
            <div className="flex flex-wrap items-center gap-2 text-xs uppercase tracking-[0.2em] text-slate-500">
              <span>Tiến trình đơn hàng</span>
              <span className="text-slate-400">•</span>
              <span>Dữ liệu giả lập UI</span>
            </div>
            <div className="grid gap-2 sm:grid-cols-3">
              {statusSteps.map((step) => {
                const isActive = statusSteps.indexOf(step) <= statusSteps.indexOf(order.orderInfo.status);
                return (
                  <div key={step} className={`rounded-2xl border p-3 text-center text-xs font-semibold ${isActive ? 'border-blue-300 bg-blue-50 text-blue-700' : 'border-slate-200 bg-slate-100 text-slate-500'}`}>
                    {getMockStatusLabel(step)}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mt-8 grid gap-6 lg:grid-cols-2">
            <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Thông tin đơn hàng</p>
              <div className="mt-4 space-y-3 text-sm text-slate-700">
                <div className="flex justify-between"><span>Mã đơn:</span><span>{order.orderInfo.orderId}</span></div>
                <div className="flex justify-between"><span>Ngày đặt:</span><span>{new Date(order.orderInfo.createdAt).toLocaleString('vi-VN')}</span></div>
                <div className="flex justify-between"><span>Trạng thái:</span><span className={`rounded-full px-3 py-1 text-xs font-semibold ${statusColor(order.orderInfo.status)}`}>{getMockStatusLabel(order.orderInfo.status)}</span></div>
                <div className="flex justify-between"><span>Phương thức:</span><span>{order.orderInfo.paymentMethod === 'COD' ? 'COD' : 'Chuyển khoản ngân hàng'}</span></div>
              </div>
            </section>
            <section className="rounded-2xl border border-slate-200 bg-slate-50 p-6">
              <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Thông tin khách hàng</p>
              <div className="mt-4 space-y-3 text-sm text-slate-700">
                <div className="flex justify-between"><span>Họ tên:</span><span>{order.customerInfo.fullname}</span></div>
                <div className="flex justify-between"><span>Số điện thoại:</span><span>{order.customerInfo.phone}</span></div>
                <div className="flex justify-between"><span>Email:</span><span>{order.customerInfo.email}</span></div>
              </div>
            </section>
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Địa chỉ giao hàng</p>
            <p className="mt-4 text-sm text-slate-700">{order.shippingInfo.address}</p>
            {order.shippingInfo.note && (
              <p className="mt-3 text-sm text-slate-600">Ghi chú: {order.shippingInfo.note}</p>
            )}
          </div>

          <div className="mt-6 rounded-2xl border border-slate-200 bg-slate-50 p-6">
            <p className="text-xs uppercase tracking-[0.2em] text-slate-500">Các sản phẩm</p>
            <div className="mt-4 space-y-4">
              {order.items.map((item) => (
                <div key={item.productId} className="grid gap-3 sm:grid-cols-[1fr_auto_auto] text-sm text-slate-700">
                  <div>
                    <p className="font-semibold text-slate-950">{item.name}</p>
                    <p className="mt-1 text-slate-500">Số lượng: {item.quantity}</p>
                  </div>
                  <div className="text-right">
                    <p>{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.unitPrice)}</p>
                  </div>
                  <div className="text-right font-semibold text-slate-950">
                    {new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(item.subtotal)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-6 flex flex-col gap-4 rounded-2xl border border-slate-200 bg-slate-50 p-6 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Tổng đơn hàng</p>
              <p className="mt-3 text-3xl font-semibold text-slate-950">{new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(order.orderInfo.total)}</p>
            </div>
            <Button type="button" onClick={() => navigate('/products')}>Tiếp tục mua sắm</Button>
          </div>

          <div className="mt-8 rounded-2xl border border-slate-200 bg-slate-50 p-6 text-sm text-slate-600">
            <p className="font-medium text-slate-900">Lưu ý:</p>
            <p className="mt-2">Dữ liệu đơn hàng đang được hiển thị từ dữ liệu mô phỏng. TODO: Thay bằng API BE-013 khi có dữ liệu đơn hàng thực tế.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OrderTrackingPage;
