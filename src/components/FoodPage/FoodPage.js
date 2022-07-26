import React, { useState } from "react"

import useApi from "../../hooks/useApi";
import FoodContainer from "../FoodContainer/FoodContainer";
import CreateFoodForm from "../CreateFoodForm/CreateFoodForm";
import styles from "./FoodPage.module.css"
import API_URL from "../../constants";

const FoodPage = ({ token }) => {

  const [foodData, getFoodData, isLoadingFood] = useApi(`${API_URL}/food`, token)
  const [activeFood, setActiveFood] = useState(null)

  return (
    isLoadingFood ? "Loading food" :
      <div className={styles.FoodPage}>
        <CreateFoodForm getFoods={getFoodData} token={token} />
        <FoodContainer
          foodArray={foodData} 
          getFoods={getFoodData} 
          activeFood={activeFood} 
          setActiveFood={setActiveFood}
          token={token}
        />        
      </div>
  )
}

export default FoodPage