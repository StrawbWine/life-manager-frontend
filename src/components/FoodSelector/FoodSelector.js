import React from "react"

import FoodSelectorButton from "../Buttons/FoodSelectorButton/FoodSelectorButton"
import styles from "./FoodSelector.module.css"

const FoodSelector = ({ foodData, activeFood, setActiveFood }) => {

  return (
    <div className={styles.FoodSelector}>
      {foodData.map(food => 
        <FoodSelectorButton
          foodId={food.id}
          foodName={food.name} 
          active={food.id === activeFood}
          setActive={setActiveFood}
          key={food.id} 
        />)        
      }
    </div>
  )
}

export default FoodSelector