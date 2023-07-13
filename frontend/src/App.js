import React from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import {
  Layout
} from './pages'
import 'bulma/css/bulma.min.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
