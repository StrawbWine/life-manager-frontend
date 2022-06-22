import React from "react"

import FoodSelectorButton from "../Buttons/FoodSelectorButton/FoodSelectorButton"

const FoodSelector = ({ foodData, activeFood }) => {

  return (
    <div className="FoodSelector">
      {foodData.map(food => 
        <FoodSelectorButton 
          foodName={food.name} 
          active={food.id === activeFood} 
          key={food.id} 
        />)        
      }
    </div>
  )
}

export default FoodSelector