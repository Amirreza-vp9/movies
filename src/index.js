import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import Owner from './owner';
import App from './App';
import SignIn from './signIn';
import SignUp from './signUp';
import Scifi from './Scifi';
import Drama from './Drama';
import Home from './home';
import Animation from './Animation';
import Profile from './profile';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Route, Routes} from "react-router-dom";
import {DataProvider} from './DataProvider';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
  <DataProvider>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<App/>}>
      <Route path='Scifi' element={<Scifi/>} />
      <Route path='home' element={<Home/>} />
      <Route path='/profile/:id' element={<Profile/>}/>
      <Route path='Drama' element={<Drama/>} />
      <Route path='Animation' element={<Animation/>} />
    </Route>
    <Route path='/owner' element={<Owner/>} />
    <Route path='/signIn' element={<SignIn/>} />
    <Route path='/signUp' element={<SignUp/>} />
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
</DataProvider>
</>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
