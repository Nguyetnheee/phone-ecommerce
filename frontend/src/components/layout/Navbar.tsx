import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-4 sm:px-6 lg:flex-row lg:items-center lg:px-8">
        <div className="flex items-center justify-between gap-4">
          <Link to="/" className="text-xl font-bold text-slate-950">
            PhoneStore
          </Link>
          <div className="flex items-center gap-3 text-sm font-medium text-slate-700 lg:hidden">
            <Link to="/">Giỏ hàng</Link>
            <Link to="/">Tài khoản</Link>
          </div>
        </div>

        <div className="flex min-h-11 flex-1 items-center rounded-md border border-slate-300 bg-slate-50 px-4 text-sm text-slate-500 lg:max-w-xl">
          Tìm kiếm điện thoại, thương hiệu, phụ kiện...
        </div>

        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm font-medium text-slate-700">
          <Link to="/" className="hover:text-blue-600">
            Trang chủ
          </Link>
          <Link to="/" className="hover:text-blue-600">
            Sản phẩm
          </Link>
          <Link to="/" className="hover:text-blue-600">
            Khuyến mãi
          </Link>
          <Link to="/" className="hidden hover:text-blue-600 lg:inline">
            Giỏ hàng
          </Link>
          <Link to="/" className="hidden hover:text-blue-600 lg:inline">
            Tài khoản
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
