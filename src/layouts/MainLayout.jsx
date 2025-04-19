import React from "react";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <>
      <h1>navbar</h1>
      <Outlet />
      <h1>footer</h1>
    </>
  );
};

export default MainLayout;
