import React from "react"
import Food from "../Food/Food"
import styles from "./FoodContainer.module.css"

const FoodContainer = ({ foodArray}) => {
  return (
    <div className={styles.FoodContainer}>
      {foodArray.map(foodProps => <Food key={foodProps.id} foodProps={foodProps} />)}
    </div>
  )
}

export default FoodContainer