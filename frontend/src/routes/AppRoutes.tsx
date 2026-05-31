import { Route, Routes } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import HomePage from '../pages/home/HomePage';
import ProductListPage from '../pages/products/ProductListPage';
import LoginPage from '../pages/auth/LoginPage';
import RegisterPage from '../pages/auth/RegisterPage';
import OrderSuccessPage from '../pages/order/OrderSuccessPage';
import OrderTrackingPage from '../pages/order/OrderTrackingPage';

function AppRoutes() {
  return (
    <Routes>
      <Route
        path="/"
        element={
          <MainLayout>
            <HomePage />
          </MainLayout>
        }
      />
      <Route
        path="/products"
        element={
          <MainLayout>
            <ProductListPage />
          </MainLayout>
        }
      />
      <Route path="/order-success" element={
        <MainLayout>
          <OrderSuccessPage />
        </MainLayout>
      } />
      <Route path="/orders/:orderId" element={
        <MainLayout>
          <OrderTrackingPage />
        </MainLayout>
      } />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
    </Routes>
  );
}

export default AppRoutes;
