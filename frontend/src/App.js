import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import OpeningPage from './OpeningPage';
import Login from './comoponents/Login';
import Register from './comoponents/Register';
import Dashboard from './pages/Dashboard';

const App =() => {
  const isAuthenticated = !!localStorage.getItem('token');
  return(
    <BrowserRouter>
      <Routes>
        <Route path = "/" element = {<OpeningPage/>}/>
        {/* <Route
          path="/"
          element={<Navigate to={isAuthenticated ? "/dashboard" : "/login"}/>}
        /> */}
        <Route path = "/login" element = {<Login/>}/>
        <Route path = "/register" element = {<Register/>}/>
        <Route 
          path = '/dashboard'
          element = {isAuthenticated ? <Dashboard/> : <Navigate to = "/"/>}
        />
      </Routes>
    </BrowserRouter>
  );
};
export default App;