import React from "react";
import {
  Home,
  ProductDetailsPage,
  ProductItem,
  FavoritePage,
  ComparePage,
} from "./pages";
import { NavBar } from "./components";
import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/products",
      element: <ProductDetailsPage />,
    },
    {
      path: ":id",
      element: <ProductItem />,
    },
    {
      path: "/favorite",
      element: <FavoritePage />,
    },
    {
      path: "products/compare",
      element: <ComparePage />,
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
