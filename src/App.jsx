import React, { Suspense, lazy } from "react";
import { NavBar, Loader } from "./components";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Home = lazy(() => import("./pages/Home"));
const ProductDetailsPage = lazy(() => import("./pages/ProductDetailsPage"));
const ProductItem = lazy(() => import("./pages/ProductItem"));
const FavoritePage = lazy(() => import("./pages/FavoritePage"));
const ComparePage = lazy(() => import("./pages/ComparePage"));
const CartPage = lazy(() => import("./pages/CartPage"));

function App() {
  const router = createBrowserRouter([
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
      path: "*",
      element: <h1>404 Not Found</h1>,
    },
  ]);

  return (
    <React.StrictMode>
      <NavBar />
      <ToastContainer />
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}

export default App;
