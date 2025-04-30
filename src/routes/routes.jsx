import { createBrowserRouter } from "react-router";

import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import About from "../pages/About";
import Favorite from "../pages/Favorite";
import PhoneDetails from "../pages/PhoneDetails";
import ErrorPage from "../pages/ErrorPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
        hydrateFallbackElement: <p>Loading, please waite....</p>,
        loader: () => fetch("../phones.json"),
      },
      {
        path: "/favorites",
        Component: Favorite,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/phone-details/:id",
        element: <PhoneDetails />,
        loader: () => fetch("../phones.json"),
      },
    ],
  },
]);
