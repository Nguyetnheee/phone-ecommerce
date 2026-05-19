import { Route, Routes } from 'react-router-dom';
import MainLayout from '../components/layout/MainLayout';
import HomePage from '../pages/home/HomePage';
import ProductDetailPage from '../pages/products/ProductDetailPage';
import ProductListPage from '../pages/products/ProductListPage';

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
