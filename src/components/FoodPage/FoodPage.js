import React, { useState } from "react"

import useApi from "../../hooks/useApi";
import FoodContainer from "../FoodContainer/FoodContainer";
import CreateFoodForm from "../CreateFoodForm/CreateFoodForm";
import styles from "./FoodPage.module.css"

const FoodPage = () => {
  const API_URL = process.env.REACT_APP_API_URL

  const [foodData, getFoodData, isLoadingFood] = useApi(`${API_URL}/food`)
  const [activeFood, setActiveFood] = useState(null)

  return (
    isLoadingFood ? "Loading food" :
      <div className={styles.FoodPage}>
        <CreateFoodForm getFoods={getFoodData} />
        <FoodContainer
          foodArray={foodData} 
          getFoods={getFoodData} 
          activeFood={activeFood} 
          setActiveFood={setActiveFood}
        />        
      </div>
  )
}

export default FoodPage