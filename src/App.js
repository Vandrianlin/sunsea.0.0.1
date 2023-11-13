import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import './style.css';
import Navbar from './component/navbar/navbar';
import Footer from './component/footer/footer';

export default function App() {
  return (
    <div>
      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
}

export default App;
