import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Location from "./pages/location";
import About from "./pages/about"; // Optional if you use About
import Vehicles from "./pages/vehicles";
import { CarProvider } from './context/CarContext';
import AdminVehicles from './pages/Admin/Vehicles';
import reportWebVitals from './reportWebVitals';
import VehiclePage from "./pages/VehiclePage";
import "./index.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import AdminBookings from '../src/pages/Admin/Booking'


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // <React.StrictMode>
  <CarProvider>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/locations" element={<Location />} />
        <Route path="/about" element={<About />} />
        <Route path="/reserve" element={<Contact />} />
        <Route path="/our-vehicles" element={<Vehicles />} />
        <Route path="/vehicle/:id" element={<VehiclePage />} />
        <Route path="/admin-vehicles" element={<AdminVehicles />} />
        <Route path="/admin/bookings" element={<AdminBookings />} />

      </Routes>
    </BrowserRouter>
  </CarProvider>
  // </React.StrictMode>
);

reportWebVitals();