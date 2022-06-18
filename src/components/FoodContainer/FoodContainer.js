import React from "react"
import Food from "../Food/Food"
import styles from "./FoodContainer.module.css"

const FoodContainer = ({ foodArray, getFoods }) => {
  return (
    <div className={styles.FoodContainer}>
      {foodArray.map(foodProps => <Food key={foodProps.id} foodProps={foodProps} getFoods={getFoods} />)}
    </div>
  )
}

export default FoodContainer