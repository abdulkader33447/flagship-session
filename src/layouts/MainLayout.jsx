import React from "react";
import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const MainLayout = () => {
  return (
    <>
      <Navbar/>
      <Outlet />
      <h1>footer</h1>
    </>
  );
};

export default MainLayout;
