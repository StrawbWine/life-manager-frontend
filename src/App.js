import React, { useState } from "react"
import { BrowserRouter as Router, Routes, Route,  } from "react-router-dom";
import './App.css';
import useApi from "./hooks/useApi";
import FoodContainer from "./components/FoodContainer/FoodContainer";
import CreateFoodForm from "./components/CreateFoodForm/CreateFoodForm";
import CreateFoodPortionForm from "./components/CreateFoodPortionForm/CreateFoodPortionForm";
import Navbar from "./components/Navbar/Navbar";
import FoodPage from "./components/FoodPage/FoodPage";
import FoodPortionPage from "./components/FoodPortionPage/FoodPortionPage";

function App() {
  // const API_URL = process.env.REACT_APP_API_URL

  // const [foodData, getFoodData, setFoodData] = useApi(`${API_URL}/food`)
  // const [activeFood, setActiveFood] = useState(null)

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
