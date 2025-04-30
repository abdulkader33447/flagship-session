import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router";

import { router } from "./routes/routes.jsx";
import { HelmetProvider } from "react-helmet-async";
import CartProvider from "./providers/CartProvider.jsx";
import { Toaster } from "react-hot-toast";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <HelmetProvider>
      <CartProvider>
        <RouterProvider router={router} />
        <Toaster position="top-right"/>
      </CartProvider>
    </HelmetProvider>
  </StrictMode>
);
