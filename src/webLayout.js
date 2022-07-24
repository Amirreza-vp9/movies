import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import { DataContext } from "./DataProvider";

export default function WebLayout() {
  const { darkTheme, setDarkTheme } = useContext(DataContext);

  const themeStyle = {
    margin: "0",
    padding: "0 0 300px 0",
    backgroundColor: darkTheme ? "#0e0e0e" : "rgb(94, 97, 100)",
  };

  return (
    <div style={themeStyle}>
      <Navbar />
      <Outlet />
    </div>
  );
}
