import React from "react"
import styles from "./FoodSelectorButton.module.css"

const FoodSelectorButton = ({ foodId, foodName, active, setActive }) => {
  const handleClick = () => {
    setActive(foodId)
  }

  return (
    <div className={active ? styles.FoodSelectorButtonActive : styles.FoodSelectorButton} onClick={handleClick}>
      <p className={styles.FoodName}>{foodName}</p>
    </div>
  )
}

export default FoodSelectorButton