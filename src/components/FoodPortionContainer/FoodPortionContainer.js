import React from "react"

import styles from "./FoodPortionContainer.module.css"
import FoodPortion from "../FoodPortion/FoodPortion"

const FoodPortionContainer = ({ foodPortionData, getFoodPortionData }) => {
  return (
    <div className={styles.FoodPortionContainer}>
      {foodPortionData.map(foodPortion => <FoodPortion data={foodPortion} getFoodPortionData={getFoodPortionData} />)}
    </div>
  )
}

export default FoodPortionContainer