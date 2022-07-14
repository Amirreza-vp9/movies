import React from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';
import Navbar from './navbar';

export default function App() {

  return (
    <div className="App">
        <Navbar/>
        <Outlet/>
    </div>
  );
}