function ReturnWarrantyPolicyPage() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
          <div className="space-y-8">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-blue-600">
                Chính sách đổi trả và bảo hành
              </p>
              <h1 className="mt-3 text-3xl font-bold tracking-tight text-slate-950 sm:text-4xl">
                Chính sách đổi trả và bảo hành sản phẩm điện thoại
              </h1>
              <p className="mt-4 text-base leading-7 text-slate-600">
                Đây là chính sách mẫu dành cho dự án Phone Ecommerce. Nội dung tập trung vào sản phẩm điện thoại và được viết với cách trình bày đơn giản, rõ ràng cho khách hàng tham khảo.
              </p>
            </div>

            <section className="space-y-4 rounded-3xl bg-slate-50 p-6">
              <h2 className="text-2xl font-semibold text-slate-950">Điều kiện đổi trả hợp lệ</h2>
              <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
                <li>Sản phẩm vẫn còn trong hộp, chưa bị hư hỏng do người dùng và đủ phụ kiện đi kèm.</li>
                <li>Tem, seal nguyên vẹn nếu sản phẩm còn trong giai đoạn chưa mở hộp.</li>
                <li>Sản phẩm bị lỗi kỹ thuật hoặc khác biệt so với mô tả trên trang khi nhận hàng.</li>
                <li>Đơn hàng được thông báo yêu cầu đổi trả trong vòng 7 ngày kể từ ngày nhận hàng.</li>
              </ul>
            </section>

            <section className="space-y-4 rounded-3xl bg-slate-50 p-6">
              <h2 className="text-2xl font-semibold text-slate-950">Trường hợp không được đổi trả</h2>
              <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
                <li>Sản phẩm bị hư hỏng do va chạm, rơi vỡ, ngấm nước hoặc sử dụng sai hướng dẫn của nhà sản xuất.</li>
                <li>Máy mất tem, seal bảo hành, hoặc phụ kiện bị mất, vỏ hộp không nguyên vẹn.</li>
                <li>Thiết bị đã lắp thêm phụ kiện không chính hãng gây ảnh hưởng đến hoạt động.</li>
                <li>Sản phẩm đã hết hạn đổi trả 7 ngày kể từ ngày giao hàng.</li>
              </ul>
            </section>

            <section className="space-y-4 rounded-3xl bg-slate-50 p-6">
              <h2 className="text-2xl font-semibold text-slate-950">Thời hạn đổi trả</h2>
              <p className="text-sm leading-7 text-slate-600">
                Khách hàng có thể yêu cầu đổi trả trong vòng 7 ngày kể từ ngày nhận hàng. Yêu cầu phải được gửi kèm ảnh chụp sản phẩm và thông tin đơn hàng để thuận tiện xử lý.
              </p>
              <div className="rounded-2xl border border-slate-200 bg-white p-4 text-sm leading-7 text-slate-700">
                <p><strong>Ghi chú:</strong> Đây là chính sách mẫu cho dự án học tập và không phải chính sách bảo hành của cửa hàng thương mại thực tế.</p>
              </div>
            </section>

            <section className="space-y-4 rounded-3xl bg-slate-50 p-6">
              <h2 className="text-2xl font-semibold text-slate-950">Phạm vi bảo hành</h2>
              <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
                <li>Bảo hành lỗi kỹ thuật của phần cứng điện thoại trong vòng 12 tháng kể từ ngày mua hàng.</li>
                <li>Bảo hành bao gồm các lỗi như màn hình không hiển thị, không sạc được, loa/mic không hoạt động, phần cứng bên trong bị lỗi.</li>
                <li>Bảo hành không bao gồm hao mòn bình thường, lỗi do cài đặt phần mềm hoặc tác động vật lý từ người dùng.</li>
              </ul>
            </section>

            <section className="space-y-4 rounded-3xl bg-slate-50 p-6">
              <h2 className="text-2xl font-semibold text-slate-950">Quy trình bảo hành</h2>
              <ol className="list-decimal space-y-3 pl-5 text-sm leading-7 text-slate-600">
                <li>Liên hệ trung tâm hỗ trợ bằng email hoặc hotline và cung cấp mã đơn hàng, thông tin sản phẩm.</li>
                <li>Gửi mô tả chi tiết lỗi và ảnh chụp sản phẩm hiện trạng (nếu có).</li>
                <li>Chúng tôi sẽ xác nhận tình trạng và hướng dẫn gửi sản phẩm về trung tâm bảo hành mẫu.</li>
                <li>Sau khi kiểm tra, nếu lỗi thuộc phạm vi bảo hành, sản phẩm sẽ được sửa chữa hoặc đổi máy mới theo điều kiện dự án.</li>
              </ol>
            </section>

            <section className="space-y-4 rounded-3xl bg-slate-50 p-6">
              <h2 className="text-2xl font-semibold text-slate-950">Quy trình hỗ trợ khách hàng</h2>
              <p className="text-sm leading-7 text-slate-600">
                Đội ngũ hỗ trợ dự án sẽ tiếp nhận và trả lời yêu cầu trong khung thời gian phù hợp với đặc thù website học tập.</p>
              <ul className="list-disc space-y-2 pl-5 text-sm leading-7 text-slate-600">
                <li>Tiếp nhận yêu cầu qua email <strong>support@phonestore.vn</strong> hoặc hotline mẫu <strong>1900 0000</strong>.</li>
                <li>Xác nhận yêu cầu trong vòng 24 giờ làm việc và hướng dẫn các bước tiếp theo.</li>
                <li>Hướng dẫn khách hàng chuẩn bị sản phẩm và tài liệu đơn hàng khi cần đổi trả hoặc bảo hành.</li>
                <li>Thông tin cập nhật tình trạng xử lý sẽ được thông báo lại qua email.</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReturnWarrantyPolicyPage;
