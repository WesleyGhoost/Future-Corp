import React from 'react';
import ReactDOM from 'react-dom/client';

import { Home } from './pages/Home'
import { Chip } from './pages/Chip'
import { Glasses } from './pages/Glasses'
import { IA } from './pages/IA'
import { Purchase } from './pages/Purchase';

import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './index.css';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/chip' element={<Chip />}/>
        <Route path='/glasses' element={<Glasses />}/>
        <Route path='/ia' element={<IA />}/>
        <Route path='/purchase' element={<Purchase />}/>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
reportWebVitals();
