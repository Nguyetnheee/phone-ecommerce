function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-950 text-slate-300">
      <div className="mx-auto grid max-w-7xl gap-8 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-4 lg:px-8">
        <div>
          <h2 className="text-lg font-bold text-white">PhoneStore</h2>
          <p className="mt-3 text-sm leading-6">
            Cửa hàng điện thoại chính hãng với dịch vụ tư vấn, bảo hành và hỗ trợ mua hàng rõ ràng.
          </p>
        </div>
        <div>
          <h3 className="font-semibold text-white">Liên hệ</h3>
          <p className="mt-3 text-sm">Hotline: 1900 0000</p>
          <p className="mt-2 text-sm">Email: support@phonestore.vn</p>
        </div>
        <div>
          <h3 className="font-semibold text-white">Chính sách</h3>
          <ul className="mt-3 space-y-2 text-sm">
            <li>Chính sách bảo hành</li>
            <li>Chính sách đổi trả</li>
            <li>Điều khoản mua hàng</li>
          </ul>
        </div>
        <div>
          <h3 className="font-semibold text-white">Thông tin pháp lý</h3>
          <p className="mt-3 text-sm leading-6">
            Thông tin doanh nghiệp và giấy phép kinh doanh sẽ được cập nhật trong giai đoạn hoàn thiện dự án.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
