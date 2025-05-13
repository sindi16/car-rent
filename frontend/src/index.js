import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Location from "./pages/location";
import About from "./pages/about"; // Optional if you use About
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import BookForm from './components/book-form';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/locations" element={<Location />} />
        <Route path="/about" element={<About />} /> {/* Optional */}
        <Route path="/reserve" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();