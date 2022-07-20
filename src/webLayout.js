import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar";

export default function WebLayout() {
  return (
    <div className="App">
      <Navbar />
      <Outlet />
    </div>
  );
}
