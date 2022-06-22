import React from "react"
import { useState } from "react"

import FoodSelector from "../FoodSelector/FoodSelector"
import useApi from "../../hooks/useApi"
import CreateFoodPortionForm from "../CreateFoodPortionForm/CreateFoodPortionForm"

const FoodPortionPage = () => {
  const API_URL = process.env.REACT_APP_API_URL

  const [foodData, getFoodData, setFoodData] = useApi(`${API_URL}/food`)
  const [activeFood, setActiveFood] = useState(null)

  return (
    <div className="FoodPortionPage">
      <FoodSelector foodData={foodData} activeFood={activeFood} setActiveFood={setActiveFood} />
      <CreateFoodPortionForm activeFood={activeFood} />
    </div>
  )
}

export default FoodPortionPage