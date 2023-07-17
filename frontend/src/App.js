import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {
  Layout,
  Dashboard
} from './pages'
import Login from './components/Login';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
