import { createBrowserRouter } from "react-router";
import App from "../App";
import Favorite from "../Favorite";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement:<p>Error</p>,
    children: [
      {
        path:'/',
        element:<Home/>
      },
      {
        path: "/favorites",
        Component: Favorite,
        children: [
          {
            path: "more-nested",
            element: <p>i am inside fav</p>,
          },
        ],
      },
      {
        path: "/about",
        element: <p>this is about page</p>,
      },
    ],
  },
]);
