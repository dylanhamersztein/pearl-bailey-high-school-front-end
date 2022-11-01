import * as React from "react";
import { NavBar } from "../nav-bar/NavBar";
import { Outlet } from "react-router-dom";

export const Layout = () => {
  return (
    <div className="d-flex flex-column vh-100 vw-100">
      <NavBar />
      <Outlet />
    </div>
  );
};
