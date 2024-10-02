import React from "react";
import {
  Home,
  ProductDetailsPage,
  ProductItem,
  FavoritePage,
  ComparePage,
} from "./pages";
import { NavBar } from "././componets";
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
      children: [
        {
          path: "compare",
          element: <ComparePage />,
        },
        {
          path: ":id",
          element: <ProductItem />,
        },
      ],
    },
    {
      path: "/favorite",
      element: <FavoritePage />,
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
