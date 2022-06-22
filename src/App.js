import React, { useState } from "react"
import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";
import './App.css';
import Navbar from "./components/Navbar/Navbar";
import FoodPage from "./components/FoodPage/FoodPage";
import FoodPortionPage from "./components/FoodPortionPage/FoodPortionPage";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/food" element={<FoodPage />} />
          <Route path="/foodportion" element={<FoodPortionPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
