import React, { Suspense, lazy } from "react";
import { NavBar, Loader } from "./components";
import {
  createBrowserRouter,
  RouterProvider,
  useLocation,
  Outlet,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";

const Home = lazy(() => import("./pages/Home"));
const ProductDetailsPage = lazy(() => import("./pages/ProductDetailsPage"));
const ProductItem = lazy(() => import("./pages/ProductItem"));
const FavoritePage = lazy(() => import("./pages/FavoritePage"));
const ComparePage = lazy(() => import("./pages/ComparePage"));
const CartPage = lazy(() => import("./pages/CartPage"));
const CheckoutPage = lazy(() => import("./pages/CheckoutPage"));
const Dashboard = lazy(() => import("./pages/Admin/Dashboard"));

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
        path: "/products/:id",
        element: (
          <Suspense fallback={<Loader />}>
            <ProductItem />
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
        element: <h1>404 Not Found</h1>,
      },
    ],
  },
  {
    path: "/admin/dashboard",
    element: (
      <Suspense fallback={<Loader />}>
        <Dashboard />
      </Suspense>
    ),
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
