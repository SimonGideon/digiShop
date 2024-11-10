import React, { Suspense, lazy } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
  Outlet,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavBar, Loader, ProtectedRoute } from "./components";
import { AdminLayout } from "./components";
import "./App.css";
import { NotFound } from "./pages";

// Lazy-loaded components
const Home = lazy(() => import("./pages/Home"));
const ProductDetailsPage = lazy(() => import("./pages/ProductDetailsPage"));
const ProductItem = lazy(() => import("./pages/ProductItem"));
const FavoritePage = lazy(() => import("./pages/FavoritePage"));
const ComparePage = lazy(() => import("./pages/ComparePage"));
const CartPage = lazy(() => import("./pages/CartPage"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage"));
const Dashboard = lazy(() => import("./pages/Admin/Dashboard"));
const AccountsPage = lazy(() => import("./pages/Admin/AccountsPage"));
const StockList = lazy(() => import("./pages/Admin/StockList"));
const NewProduct = lazy(() => import("./pages/Admin/NewProduct"));
const Login = lazy(() => import("./pages/Admin/Login"));
const Orders = lazy(() => import("./pages/Admin/Orders"));
const Customers = lazy(() => import("./pages/Admin/Customers"));
const Categories = lazy(() => import("./pages/Admin/Categories"));
const CustomerDetails = lazy(() => import("./pages/Admin/CustomerDetails"));

function Layout() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");

  return (
    <>
      {!isAdminRoute && <NavBar />}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        closeOnClick
        pauseOnFocusLoss
        pauseOnHover
      />
      <Outlet />
    </>
  );
}

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<Loader />}>
        <Layout />
      </Suspense>
    ),
    children: [
      { path: "/", element: <Home /> },
      { path: "/products", element: <ProductDetailsPage /> },
      { path: "/products/:productId", element: <ProductItem /> },
      {
        path: "/products/:productName/:subCategory",
        element: <ProductDetailsPage />,
      },
      { path: "/products/favorite", element: <FavoritePage /> },
      { path: "/products/cart", element: <CartPage /> },
      { path: "/products/compare", element: <ComparePage /> },
      { path: "/products/checkout", element: <CheckoutPage /> },
      { path: "*", element: <NotFound /> },
    ].map((route) => ({
      ...route,
      element: <Suspense fallback={<Loader />}>{route.element}</Suspense>,
    })),
  },
  {
    path: "/admin",
    element: <Login />,
  },
  {
    path: "/admin",
    element: (
      <ProtectedRoute>
        <Suspense fallback={<Loader />}>
          <AdminLayout />
        </Suspense>
      </ProtectedRoute>
    ),
    children: [
      { path: "dashboard", element: <Dashboard /> },
      { path: "accounts", element: <AccountsPage /> },
      { path: "products", element: <StockList /> },
      { path: "products/new", element: <NewProduct /> },
      { path: "orders", element: <Orders /> },
      { path: "customers", element: <Customers /> },
      { path: "categories", element: <Categories /> },
      { path: "customers/:customerId", element: <CustomerDetails /> },
    ].map((route) => ({
      ...route,
      element: (
        <ProtectedRoute>
          <Suspense fallback={<Loader />}>{route.element}</Suspense>
        </ProtectedRoute>
      ),
    })),
  },
]);

function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
