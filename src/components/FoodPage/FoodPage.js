import React, { useState } from "react"

import useApi from "../../hooks/useApi";
import FoodContainer from "../FoodContainer/FoodContainer";
import CreateFoodForm from "../CreateFoodForm/CreateFoodForm";

const FoodPage = () => {
  const API_URL = process.env.REACT_APP_API_URL

  const [foodData, getFoodData, setFoodData] = useApi(`${API_URL}/food`)
  const [activeFood, setActiveFood] = useState(null)

  return (
    <div className="FoodPage">
      <FoodContainer
        foodArray={foodData} 
        getFoods={getFoodData} 
        activeFood={activeFood} 
        setActiveFood={setActiveFood}
      />
      <CreateFoodForm getFoods={getFoodData} />
    </div>
  )
}

export default FoodPage