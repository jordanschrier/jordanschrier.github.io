import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/index.css';
import Home from './pages/Home';
import Header from './Header';
import Crochique from './pages/Crochique';
import Clippies from './pages/Clippies';
import Greenway from './pages/Greenway';
import Scroll from './scroll';
import PageNotFound from './pages/PageNotFound';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <Header />
    <Scroll />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="crochique" element={<Crochique />} />
      <Route path="clippies" element={<Clippies />} />
      <Route path="greenway-gallery" element={<Greenway />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
    {<footer>Copyright &copy; 2024 Jordan Schrier</footer>}
  </BrowserRouter>
);

reportWebVitals(console.log);
