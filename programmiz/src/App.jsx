import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Analytics } from "@vercel/analytics/react";
import './App.css'; // Import the CSS file

import Home from "./home";
import Python from "./python";
import Javascript from "./js";
import Java from "./java";
import Css from "./css";
import Html from "./html";

function App() {
  return (
    <div className="router-container">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/python" element={<Python />} />
          <Route path="/js" element={<Javascript />} />
          <Route path="/java" element={<Java />} />
          <Route path="/css" element={<Css />} />
          <Route path="/html" element={<Html />} />
        </Routes>
      </BrowserRouter>
      <footer className="app-footer">
        <p>© 2023 Programming Language Learning Platform</p>
      </footer>
    </div>
  );
}

export default App;