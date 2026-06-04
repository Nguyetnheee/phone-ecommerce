function TermsOfUsePage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="space-y-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                Điều khoản sử dụng
              </p>
              <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Điều khoản sử dụng trang PhoneStore
              </h1>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Trang này trình bày các nguyên tắc sử dụng website Phone Ecommerce. Nội dung phù hợp cho dự án học tập và giúp người dùng hiểu rõ trách nhiệm khi truy cập, đặt hàng và sử dụng tài khoản trên website.
              </p>
            </div>

            <section className="space-y-4 rounded-3xl bg-slate-50 p-6">
              <h2 className="text-2xl font-semibold text-slate-950">Trách nhiệm của người dùng</h2>
              <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
                <li>Người dùng cần cung cấp thông tin chính xác khi đăng ký tài khoản và đặt hàng.</li>
                <li>Người dùng chịu trách nhiệm bảo mật mật khẩu và không chia sẻ tài khoản với người khác.</li>
                <li>Người dùng nên kiểm tra kỹ thông tin sản phẩm, địa chỉ giao hàng và số lượng trước khi xác nhận đơn hàng.</li>
              </ul>
            </section>

            <section className="space-y-4 rounded-3xl bg-slate-50 p-6">
              <h2 className="text-2xl font-semibold text-slate-950">Tuyên bố thông tin sản phẩm</h2>
              <p className="text-sm leading-7 text-slate-600">
                Website cung cấp thông tin mô tả sản phẩm dựa trên dữ liệu nội bộ và mẫu ảnh minh họa. Mặc dù cố gắng chính xác, một số thông tin có thể không phản ánh đầy đủ đặc tính thực tế.
              </p>
              <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
                <li>Thông tin về màu sắc, kích thước và cấu hình được hiển thị để tham khảo.</li>
                <li>Hình ảnh sản phẩm có thể khác biệt so với sản phẩm thật do góc chụp và hiển thị màn hình.</li>
                <li>Người dùng nên liên hệ trước khi mua nếu cần xác nhận chi tiết kỹ thuật.</li>
              </ul>
            </section>

            <section className="space-y-4 rounded-3xl bg-slate-50 p-6">
              <h2 className="text-2xl font-semibold text-slate-950">Điều kiện đặt hàng</h2>
              <p className="text-sm leading-7 text-slate-600">
                Việc đặt hàng trên website tuân theo những điều kiện sau:
              </p>
              <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
                <li>Đơn hàng chỉ được ghi nhận khi thông tin liên hệ và địa chỉ giao hàng đầy đủ.</li>
                <li>Website không chịu trách nhiệm cho sai sót phát sinh do thông tin nhập sai của khách hàng.</li>
                <li>Giao dịch có thể bị hủy nếu thông tin thanh toán hoặc xác thực không hợp lệ.</li>
              </ul>
            </section>

            <section className="space-y-4 rounded-3xl bg-slate-50 p-6">
              <h2 className="text-2xl font-semibold text-slate-950">Quy định sử dụng tài khoản</h2>
              <p className="text-sm leading-7 text-slate-600">
                Tài khoản khách hàng được sử dụng để quản lý thông tin cá nhân và đơn hàng. Người dùng cần tuân thủ các quy định sau:
              </p>
              <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
                <li>Không sử dụng tài khoản của người khác mà không được phép.</li>
                <li>Không chia sẻ thông tin đăng nhập, mật khẩu hoặc mã xác thực ra bên ngoài.</li>
                <li>Thông báo kịp thời nếu nghi ngờ tài khoản bị xâm nhập hoặc lạm dụng.</li>
              </ul>
            </section>

            <section className="space-y-4 rounded-3xl bg-slate-50 p-6">
              <h2 className="text-2xl font-semibold text-slate-950">Giới hạn sử dụng website</h2>
              <p className="text-sm leading-7 text-slate-600">
                Website chỉ phục vụ mục đích học tập và demo nên có những giới hạn sử dụng sau:
              </p>
              <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
                <li>Không sử dụng trang web cho mục đích thương mại thực tế hoặc giao dịch ngoài phạm vi dự án.</li>
                <li>Không can thiệp, thay đổi hoặc khai thác hệ thống bằng các phương pháp bất hợp pháp.</li>
                <li>Không sử dụng robot, script tự động hoặc công cụ tự động hóa để truy cập nội dung mà không được phép.</li>
              </ul>
            </section>

            <section className="space-y-4 rounded-3xl bg-slate-50 p-6">
              <h2 className="text-2xl font-semibold text-slate-950">Giới hạn dịch vụ</h2>
              <p className="text-sm leading-7 text-slate-600">
                Vì đây là sản phẩm học tập, dịch vụ trên website có thể bị giới hạn và thay đổi:
              </p>
              <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
                <li>Website không đảm bảo mọi tính năng luôn hoạt động hoàn hảo ở mọi thời điểm.</li>
                <li>Đôi khi có thể xảy ra sai sót về dữ liệu sản phẩm hoặc lỗi hiển thị.</li>
                <li>Thông tin và tính năng có thể được cập nhật khi nhóm phát triển hoàn thiện thêm dự án.</li>
              </ul>
            </section>

            <section className="space-y-4 rounded-3xl bg-slate-50 p-6">
              <h2 className="text-2xl font-semibold text-slate-950">Thông tin liên hệ</h2>
              <p className="text-sm leading-7 text-slate-600">
                Nếu bạn có câu hỏi về điều khoản sử dụng, vui lòng liên hệ nhóm dự án để được hỗ trợ.
              </p>
              <div className="space-y-3 rounded-2xl border border-slate-200 bg-white p-4 text-sm leading-7 text-slate-700">
                <p><strong>Email hỗ trợ:</strong> support@phonestore.vn</p>
                <p><strong>Hotline mẫu:</strong> 1900 0000</p>
                <p><strong>Lưu ý:</strong> Đây là trang điều khoản dùng cho dự án sinh viên, không phải điều khoản pháp lý cho công ty thực tế.</p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TermsOfUsePage;
