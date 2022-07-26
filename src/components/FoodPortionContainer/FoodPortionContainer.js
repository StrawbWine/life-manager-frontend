import React from "react"

import styles from "./FoodPortionContainer.module.css"
import FoodPortion from "../FoodPortion/FoodPortion"

const FoodPortionContainer = ({ foodPortionData, getFoodPortionData, date, token }) => {
  return (
    <div className={styles.FoodPortionContainer}>
      {foodPortionData.map(foodPortion => 
        <FoodPortion 
          key={foodPortion.id} 
          data={foodPortion} 
          getFoodPortionData={getFoodPortionData} 
          date={date}
          token={token}
        />)}
    </div>
  )
}

export default FoodPortionContainer