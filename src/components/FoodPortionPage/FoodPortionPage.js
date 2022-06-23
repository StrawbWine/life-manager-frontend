import React from "react"
import { useState } from "react"

import FoodSelector from "../FoodSelector/FoodSelector"
import useApi from "../../hooks/useApi"
import CreateFoodPortionForm from "../CreateFoodPortionForm/CreateFoodPortionForm"
import FoodPortionContainer from "../FoodPortionContainer/FoodPortionContainer"

const FoodPortionPage = () => {
  const API_URL = process.env.REACT_APP_API_URL

  const [foodData, getFoodData, setFoodData] = useApi(`${API_URL}/food`)
  const [activeFood, setActiveFood] = useState(null)
  const [foodPortionData, getFoodPortionData, setFoodPortionData] = useApi(`${API_URL}/foodportion`)

  return (
    <div className="FoodPortionPage">
      <FoodSelector foodData={foodData} activeFood={activeFood} setActiveFood={setActiveFood} />
      <CreateFoodPortionForm activeFood={activeFood} getFoodPortionData={getFoodPortionData} />
      <FoodPortionContainer foodPortionData={foodPortionData} getFoodPortionData={getFoodPortionData} />
    </div>
  )
}

export default FoodPortionPage