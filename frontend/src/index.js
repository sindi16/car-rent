import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Contact from "./pages/contact";
import Location from "./pages/location";
import About from "./pages/about";
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< Updated upstream
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
          <Route path="/contact" element={<Contact />} />
          <Route path="/locations" element={<Location />} />
      </Routes>
    </BrowserRouter>
=======

    {/* <Home />  */}
    {/* <Contact /> */}
    {/* <Location /> */}
    <About />
>>>>>>> Stashed changes
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
