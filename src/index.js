import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import './assets/scss/styles.scss';
// Cấu hình
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import HomeTemplate from './templates/HomeTemplate/HomeTemplate';
import Home from './pages/Home/Home';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(

  <BrowserRouter>
    <Routes>
      <Route path='' element={<HomeTemplate />}>
        <Route index element={<Home />}></Route>
      </Route>
    </Routes>

  </BrowserRouter>

);
