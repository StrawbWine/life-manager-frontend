import React, { useState } from "react"
import './App.css';
import useApi from "./hooks/useApi";
import FoodContainer from "./components/FoodContainer/FoodContainer";
import CreateFoodForm from "./components/CreateFoodForm/CreateFoodForm";
import CreateFoodPortionForm from "./components/CreateFoodPortionForm/CreateFoodPortionForm";

function App() {
  const API_URL = process.env.REACT_APP_API_URL

  const [foodData, getFoodData, setFoodData] = useApi(`${API_URL}/food`)
  const [activeFood, setActiveFood] = useState(null)

  return (
    <div className="App">
      <FoodContainer
        foodArray={foodData} 
        getFoods={getFoodData} 
        activeFood={activeFood} 
        setActiveFood={setActiveFood}
      />
      <div className="Forms" style={{display: "flex"}}>
        <CreateFoodForm getFoods={getFoodData} />
        <CreateFoodPortionForm activeFood={activeFood} />
      </div>
    </div>
  );
}

export default App;
