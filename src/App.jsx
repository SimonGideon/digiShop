import React, { Suspense, lazy } from "react";
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
  Outlet,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { NavBar, Loader } from "./components";
import { AdminLayout } from "./components";
import "./App.css";
import { NotFound } from "./pages";

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
      <ToastContainer />
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
      {
        path: "/",
        element: (
          <Suspense fallback={<Loader />}>
            <Home />
          </Suspense>
        ),
      },
      {
        path: "/products",
        element: (
          <Suspense fallback={<Loader />}>
            <ProductDetailsPage />
          </Suspense>
        ),
      },
      {
        path: "/products/:productId",
        element: (
          <Suspense fallback={<Loader />}>
            <ProductItem />
          </Suspense>
        ),
      },
      {
        path: "/products/:productName/:subCategory",
        element: (
          <Suspense fallback={<Loader />}>
            <ProductDetailsPage />
          </Suspense>
        ),
      },
      {
        path: "products/favorite",
        element: (
          <Suspense fallback={<Loader />}>
            <FavoritePage />
          </Suspense>
        ),
      },
      {
        path: "/products/cart",
        element: (
          <Suspense fallback={<Loader />}>
            <CartPage />
          </Suspense>
        ),
      },
      {
        path: "/products/compare",
        element: (
          <Suspense fallback={<Loader />}>
            <ComparePage />
          </Suspense>
        ),
      },
      {
        path: "/products/checkout",
        element: (
          <Suspense fallback={<Loader />}>
            <CheckoutPage />
          </Suspense>
        ),
      },
      {
        path: "*",
        element: (
          <Suspense fallback={<Loader />}>
            <NotFound />
          </Suspense>
        ),
      },
    ],
  },
  {
    path: "/admin",
    element: (
      <Suspense fallback={<Loader />}>
        <Login />
      </Suspense>
    ),
  },
  {
    path: "/admin",
    element: (
      <Suspense fallback={<Loader />}>
        <AdminLayout />{" "}
      </Suspense>
    ),
    children: [
      {
        path: "dashboard",
        element: (
          <Suspense fallback={<Loader />}>
            <Dashboard />
          </Suspense>
        ),
      },
      {
        path: "/admin/accounts",
        element: (
          <Suspense fallback={<Loader />}>
            <AccountsPage />
          </Suspense>
        ),
      },
      {
        path: "/admin/products",
        element: (
          <Suspense fallback={<Loader />}>
            <StockList />
          </Suspense>
        ),
      },
      {
        path: "/admin/products/new",
        element: (
          <Suspense fallback={<Loader />}>
            <NewProduct />
          </Suspense>
        ),
      },
      {
        path: "/admin/orders",
        element: (
          <Suspense fallback={<Loader />}>
            <Orders />
          </Suspense>
        ),
      },
      {
        path: "/admin/customers",
        element: (
          <Suspense fallback={<Loader />}>
            <Customers />
          </Suspense>
        ),
      },
      {
        path: "/admin/categories",
        element: (
          <Suspense fallback={<Loader />}>
            <Categories />
          </Suspense>
        ),
      },
      {
        path: "/admin/customers/:customerId",
        element: (
          <Suspense fallback={<Loader />}>
            <CustomerDetails />
          </Suspense>
        ),
      },
    ],
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
