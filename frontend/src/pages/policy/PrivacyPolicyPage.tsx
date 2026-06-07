function PrivacyPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="space-y-6">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                Quyền riêng tư
              </p>
              <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Chính sách bảo mật của PhoneStore
              </h1>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Đây là trang chính sách bảo mật cho dự án học tập Phone Ecommerce. Nội dung chỉ áp dụng cho website mẫu của nhóm sinh viên và nhằm giải thích cách thu thập, sử dụng và bảo vệ dữ liệu khách hàng.
              </p>
            </div>

            <section className="space-y-4 rounded-3xl bg-slate-50 p-6">
              <h2 className="text-2xl font-semibold text-slate-950">Thông tin thu thập</h2>
              <p className="text-sm leading-7 text-slate-600">
                Chúng tôi có thể thu thập thông tin sau khi khách hàng gửi đăng ký hoặc tương tác với website:
              </p>
              <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
                <li>Họ và tên, email, và mật khẩu khi đăng ký tài khoản.</li>
                <li>Thông tin đơn hàng như sản phẩm, số lượng và địa chỉ giao hàng.</li>
                <li>Thông tin để liên hệ hỗ trợ, bao gồm email và số điện thoại khi khách hàng cung cấp.</li>
              </ul>
            </section>

            <section className="space-y-4 rounded-3xl bg-slate-50 p-6">
              <h2 className="text-2xl font-semibold text-slate-950">Mục đích thu thập dữ liệu</h2>
              <p className="text-sm leading-7 text-slate-600">
                Dữ liệu được thu thập nhằm phục vụ các mục tiêu sau trong phạm vi dự án:
              </p>
              <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
                <li>Hoàn thiện chức năng đăng nhập, đăng ký và quản lý người dùng.</li>
                <li>Xử lý đơn hàng và hiển thị thông tin sản phẩm phù hợp.</li>
                <li>Cải thiện trải nghiệm học tập và thử nghiệm thiết kế giao diện.</li>
              </ul>
            </section>

            <section className="space-y-4 rounded-3xl bg-slate-50 p-6">
              <h2 className="text-2xl font-semibold text-slate-950">Lưu trữ và bảo vệ dữ liệu</h2>
              <p className="text-sm leading-7 text-slate-600">
                Dữ liệu được lưu trữ trên cơ sở dữ liệu nội bộ của dự án và chỉ truy cập bởi nhóm phát triển. Chúng tôi cố gắng bảo vệ thông tin bằng các biện pháp sau:
              </p>
              <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
                <li>Sử dụng mã hóa mật khẩu trên backend trước khi lưu vào cơ sở dữ liệu.</li>
                <li>Hạn chế quyền truy cập vào dữ liệu trong nội bộ nhóm phát triển.</li>
                <li>Không chia sẻ dữ liệu khách hàng cho bên thứ ba trong phạm vi dự án học tập.</li>
              </ul>
            </section>

            <section className="space-y-4 rounded-3xl bg-slate-50 p-6">
              <h2 className="text-2xl font-semibold text-slate-950">Quyền của khách hàng</h2>
              <p className="text-sm leading-7 text-slate-600">
                Khách hàng có quyền:
              </p>
              <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
                <li>Yêu cầu xem lại hoặc chỉnh sửa thông tin cá nhân nếu có sai sót.</li>
                <li>Yêu cầu xóa dữ liệu cá nhân khi không còn sử dụng dịch vụ trong phạm vi dự án.</li>
                <li>Yêu cầu giải thích về cách dữ liệu được sử dụng và lưu trữ.</li>
              </ul>
            </section>

            <section className="space-y-4 rounded-3xl bg-slate-50 p-6">
              <h2 className="text-2xl font-semibold text-slate-950">Thông tin liên hệ hỗ trợ</h2>
              <p className="text-sm leading-7 text-slate-600">
                Nếu bạn có câu hỏi hoặc cần hỗ trợ về quyền riêng tư, vui lòng liên hệ nhóm phát triển dự án.
              </p>
              <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-4 text-sm leading-7 text-slate-700">
                <p><strong>Email hỗ trợ:</strong> support@phonestore.vn</p>
                <p><strong>Hotline mẫu:</strong> 1900 0000</p>
                <p><strong>Lưu ý:</strong> Đây là trang ví dụ cho dự án lớp học và không phải trang chính sách của doanh nghiệp thật.</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PrivacyPolicyPage;
