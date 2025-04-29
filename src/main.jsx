import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider } from "react-router";

import { router } from "./routes/routes.jsx";
import { HelmetProvider } from "react-helmet-async";
import CartProvider from "./providers/CartProvider.jsx";

createRoot(document.getElementById("root")).render( 
  <StrictMode>
    <HelmetProvider>
      <CartProvider>
        <RouterProvider router={router} />
      </CartProvider>
    </HelmetProvider>
  </StrictMode>
);
