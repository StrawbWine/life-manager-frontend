import axios from "axios"
import React from "react"

import styles from "./Food.module.css"
import DeleteButton from "../Buttons/DeleteButton/DeleteButton"
import API_URL from "../../constants"

const Food = ({ foodProps, getFoods, setActiveFood, selected, viewDetails }) => {

  const deleteFood = async () => {
    await axios.delete(`${API_URL}/food/${foodProps.id}`)
    getFoods()
  }

  const setActive = () => {
    setActiveFood(foodProps.id)
  }

  return (
    <div className={selected ? styles.FoodSelected : styles.Food} onClick={setActive}>
      <ul className={styles.ul}>
        <li className={styles.Name}>{foodProps.name}</li>
        {viewDetails &&
          <div>
            <li>Energy: {foodProps.energy}</li>
            <li>Fat: {foodProps.fat}</li>
            <li>Saturated fat: {foodProps.saturatedFat}</li>
            <li>Monounsaturated fat: {foodProps.monoUnsaturatedFat}</li>
            <li>Polyunsaturated fat: {foodProps.polyUnsaturatedFat}</li>
            <li>Carbohydrates: {foodProps.carbohydrates}</li>
            <li>Sugars: {foodProps.sugars}</li>
            <li>Protein: {foodProps.protein}</li>
            <li>Salt: {foodProps.salt}</li>
            <li>Fiber: {foodProps.fiber}</li>
          </div>
        }

      </ul>
      <DeleteButton onClick={deleteFood} />
    </div>
  )
}

export default Food