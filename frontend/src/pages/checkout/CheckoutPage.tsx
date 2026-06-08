import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useCartContext } from '../../context/CartContext';
import Button from '../../components/ui/Button';
import { createOrder } from '../../services/orderService';

const currencyFormatter = new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' });

const gmailRegex = /^[a-zA-Z0-9._%+-]+@gmail\.com$/;
const vnPhoneRegex = /^(\+84|0)(3|5|7|8|9)\d{8}$/;

function CheckoutPage() {
  const navigate = useNavigate();
  const { items, totalPrice, clearCart } = useCartContext();

  const [fullname, setFullname] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [note, setNote] = useState('');
  const [paymentMethod, setPaymentMethod] = useState<'COD'|'BANK_TRANSFER' | ''>('');
  const [errors, setErrors] = useState<any>({});
  const [loading, setLoading] = useState(false);
  const [apiError, setApiError] = useState('');

  // If cart is empty show empty state
  if (!items || items.length === 0) {
    return (
      <div className="min-h-screen bg-slate-50">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <h1 className="text-3xl font-bold text-slate-950">Thanh toán</h1>
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-lg border border-slate-200 bg-white p-12 text-center">
            <h2 className="mt-4 text-lg font-semibold text-slate-950">Giỏ hàng trống</h2>
            <p className="mt-2 text-slate-600">Vui lòng thêm sản phẩm trước khi thanh toán.</p>
            <div className="mt-6">
              <Button type="button" onClick={() => navigate('/products')}>Tiếp tục mua sắm</Button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  const validate = () => {
    const e: any = {};
    if (!fullname || fullname.trim().length < 2) e.fullname = 'Full name is required';
    if (!phone) e.phone = 'Phone number is required';
    else if (!vnPhoneRegex.test(phone)) e.phone = 'Số điện thoại không hợp lệ';
    if (!email) e.email = 'Email is required';
    else if (!gmailRegex.test(email)) e.email = 'Email không hợp lệ. Vui lòng nhập email Gmail.';
    if (!address) e.address = 'Shipping address is required';
    if (!paymentMethod) e.paymentMethod = 'Please select a payment method';
    setErrors(e);
    return Object.keys(e).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setApiError('');
    if (!validate()) return;
    setLoading(true);

try {
       const payload = {
         fullname,
         phone,
         email,
         address,
         note,
         paymentMethod: (paymentMethod === 'COD' ? 'COD' : 'BANK_TRANSFER') as 'COD' | 'BANK_TRANSFER',
         items,
       };

       const res = await createOrder(payload);
      if (!res.success) {
        setApiError(res.message || 'Order creation failed');
        setLoading(false);
        return;
      }

      // Clear cart only after confirmed success
      clearCart();

      // Navigate to success page with returned order id
      navigate('/order-success', { state: { orderId: res.orderId, total: res.total ?? totalPrice, paymentMethod: payload.paymentMethod } });
    } catch (err) {
      setApiError('An unexpected error occurred. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-slate-950">Thanh toán</h1>
      </div>

      <div className="mx-auto max-w-7xl px-4 pb-12 sm:px-6 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-3">
          {/* Form */}
          <div className="lg:col-span-2">
            <form onSubmit={handleSubmit} className="space-y-6 rounded-lg border border-slate-200 bg-white p-6">
              {apiError && (
                <div className="rounded-md bg-red-50 p-4 border border-red-200">
                  <p className="text-sm font-medium text-red-800">{apiError}</p>
                </div>
              )}

              <div>
                <label className="block text-sm font-medium text-slate-700">Họ và tên</label>
                <input value={fullname} onChange={(e)=>setFullname(e.target.value)} className={`mt-1 block w-full px-3 py-2 border rounded-md ${errors.fullname ? 'border-red-500 bg-red-50' : 'border-slate-300'}`} />
                {errors.fullname && <p className="mt-1 text-sm text-red-600">{errors.fullname}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">Số điện thoại</label>
                <input value={phone} onChange={(e)=>setPhone(e.target.value)} className={`mt-1 block w-full px-3 py-2 border rounded-md ${errors.phone ? 'border-red-500 bg-red-50' : 'border-slate-300'}`} />
                {errors.phone && <p className="mt-1 text-sm text-red-600">{errors.phone}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">Email</label>
                <input value={email} onChange={(e)=>setEmail(e.target.value)} className={`mt-1 block w-full px-3 py-2 border rounded-md ${errors.email ? 'border-red-500 bg-red-50' : 'border-slate-300'}`} />
                {errors.email && <p className="mt-1 text-sm text-red-600">{errors.email}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">Địa chỉ</label>
                <input value={address} onChange={(e)=>setAddress(e.target.value)} className={`mt-1 block w-full px-3 py-2 border rounded-md ${errors.address ? 'border-red-500 bg-red-50' : 'border-slate-300'}`} />
                {errors.address && <p className="mt-1 text-sm text-red-600">{errors.address}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">Ghi chú (tuỳ chọn)</label>
                <textarea value={note} onChange={(e)=>setNote(e.target.value)} className="mt-1 block w-full px-3 py-2 border rounded-md border-slate-300" rows={3} />
              </div>

              <div>
                <label className="block text-sm font-medium text-slate-700">Phương thức thanh toán</label>
                <div className="mt-2 space-y-2">
                  <label className="inline-flex items-center gap-2">
                    <input type="radio" name="payment" value="COD" checked={paymentMethod==='COD'} onChange={()=>setPaymentMethod('COD')} />
                    <span>Thanh toán khi nhận hàng (COD)</span>
                  </label>
                  <label className="inline-flex items-center gap-2">
                    <input type="radio" name="payment" value="BANK_TRANSFER" checked={paymentMethod==='BANK_TRANSFER'} onChange={()=>setPaymentMethod('BANK_TRANSFER')} />
                    <span>Chuyển khoản ngân hàng (Mock)</span>
                  </label>
                </div>
                {errors.paymentMethod && <p className="mt-1 text-sm text-red-600">{errors.paymentMethod}</p>}
              </div>

              <div>
                <Button type="submit" disabled={loading}>{loading ? 'Đang tạo đơn...' : 'Đặt hàng'}</Button>
              </div>
            </form>
          </div>

          {/* Summary */}
          <div className="lg:col-span-1">
            <div className="rounded-lg border border-slate-200 bg-white p-6">
              <h2 className="text-lg font-bold text-slate-950">Tóm tắt đơn hàng</h2>
              <div className="mt-6 space-y-4">
                {items.map((item) => (
                  <div key={item.productId} className="flex justify-between text-sm text-slate-600">
                    <span>{item.name} x {item.quantity}</span>
                    <span className="font-semibold text-slate-900">{currencyFormatter.format(item.price * item.quantity)}</span>
                  </div>
                ))}
              </div>

              <div className="my-6 border-t border-slate-200" />

              <div className="flex justify-between">
                <span className="text-base font-semibold text-slate-950">Tổng (dự kiến):</span>
                <span className="text-lg font-bold text-blue-600">{currencyFormatter.format(totalPrice)}</span>
              </div>

              <p className="mt-4 text-xs text-slate-500">Tổng tiền hiển thị chỉ để tham khảo; backend xác nhận tổng cuối cùng khi tạo đơn.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutPage;
