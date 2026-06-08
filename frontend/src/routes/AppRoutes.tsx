import { Route, Routes } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import HomePage from '../pages/home/HomePage';
import ProductListPage from '../pages/products/ProductListPage';
import ProductDetailPage from '../pages/products/ProductDetailPage';
import LoginPage from '../pages/auth/LoginPage';
import RegisterPage from '../pages/auth/RegisterPage';
import PrivacyPolicyPage from '../pages/policy/PrivacyPolicyPage';
import ReturnWarrantyPolicyPage from '../pages/policy/ReturnWarrantyPolicyPage';
import TermsOfUsePage from '../pages/terms/TermsOfUsePage';
import CartPage from '../pages/cart/CartPage';
import CheckoutPage from '../pages/checkout/CheckoutPage';
import OrderSuccessPage from '../pages/checkout/OrderSuccessPage';

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
      <Route
        path="/privacy-policy"
        element={
          <MainLayout>
            <PrivacyPolicyPage />
          </MainLayout>
        }
      />
      <Route
        path="/return-warranty"
        element={
          <MainLayout>
            <ReturnWarrantyPolicyPage />
          </MainLayout>
        }
      />
      <Route
        path="/terms-of-use"
        element={
          <MainLayout>
            <TermsOfUsePage />
          </MainLayout>
        }
      />
      <Route
        path="/cart"
        element={
          <MainLayout>
            <CartPage />
          </MainLayout>
        }
      />
      <Route
        path="/checkout"
        element={
          <MainLayout>
            <CheckoutPage />
          </MainLayout>
        }
      />
      <Route
        path="/order-success"
        element={
          <MainLayout>
            <OrderSuccessPage />
          </MainLayout>
        }
      />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route
        path="/products/:id"
        element={
          <MainLayout>
            <ProductDetailPage />
          </MainLayout>
        }
      />
    </Routes>
  );
}

export default AppRoutes;
