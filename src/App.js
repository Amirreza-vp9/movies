import React, { useEffect, useState, useContext } from "react";
import "./App.css";
import WebLayout from "./webLayout";
import Owner from "./owner";
import SignIn from "./signIn";
import SignUp from "./signUp";
import List from "./list";
import List2 from "./list2";
import Home from "./home";
import Profile from "./profile";
import WatchList from "./watchList";
import SetMovie from "./setMovie";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { DataContext } from "./DataProvider";
import Dashboard from "./dashboard";

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
          <Route path="/list2/:id" element={<List2 />} />
          <Route path="/" element={<Home />} />
          <Route path="/profile/:id" element={<Profile />} />
          <Route path="/watchList" element={<WatchList />} />
          <Route path="/setMovie" element={<SetMovie />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Route>
        <Route path="/owner" element={<Owner />} />
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
