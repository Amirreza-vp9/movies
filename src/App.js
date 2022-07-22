import React, { useEffect, useState, useContext } from "react";
import "./App.css";
import WebLayout from "./webLayout";
import Owner from "./owner";
import SignIn from "./signIn";
import SignUp from "./signUp";
import List from "./list";
import Home from "./home";
import Profile from "./profile";
import WatchList from "./watchList";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DataContext } from "./DataProvider";

export default function App() {
  const { db, setDb } = useContext(DataContext);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("database"));
    setDb(items);
  }, []);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<WebLayout />}>
          <Route path="/list/:id" element={<List />} />
          <Route path="/" element={<Home />} />
          <Route path="/profile/:id" element={<Profile />} />
        </Route>
        <Route path="/owner" element={<Owner />} />
        <Route path="/watchList" element={<WatchList />} />
        <Route path="/signIn" element={<SignIn />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <h1>404 ERROR</h1>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}
