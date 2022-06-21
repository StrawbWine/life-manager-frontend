import React from "react"
import Food from "../Food/Food"
import styles from "./FoodContainer.module.css"

const FoodContainer = ({ foodArray, getFoods, activeFood, setActiveFood }) => {
  return (
    <div className={styles.FoodContainer}>
      {foodArray.map(foodProps =>
        <Food 
          key={foodProps.id} 
          foodProps={foodProps} 
          getFoods={getFoods}
          selected={activeFood === foodProps.id}
          setActiveFood={setActiveFood} 
        />)}
    </div>
  )
}

export default FoodContainer