import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Location from "./pages/location";
import About from "./pages/about"; // Optional if you use About
import Vehicles from "./pages/vehicles";
import AdminVehicles from './pages/Admin/Vehicles';
import reportWebVitals from './reportWebVitals';
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/locations" element={<Location />} />
        <Route path="/about" element={<About />} />
        <Route path="/reserve" element={<Contact />} />
        <Route path="/our-vehicles" element={<Vehicles />} />

        <Route path="/admin-vehicles" element={<AdminVehicles />} />

      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

reportWebVitals();