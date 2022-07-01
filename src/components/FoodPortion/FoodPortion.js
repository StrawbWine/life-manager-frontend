import React from "react"
import axios from "axios"

import styles from "./FoodPortion.module.css"
import DeleteButton from "../Buttons/DeleteButton/DeleteButton"

const FoodPortion = ({ data, getFoodPortionData, date }) => {
  const API_URL = process.env.REACT_APP_API_URL

  const deleteFoodPortion = async () => {
    await axios.delete(`${API_URL}/foodportion/${data.id}`)
    getFoodPortionData(`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`)
  }

  return (
    <div className={styles.FoodPortion}>
      <ul className={styles.ul}>
        <li className={styles.Id}>
          <label>Id: </label>
          {data.id}
        </li>
        <li>
          <label>Energy: </label>
          {data.energy}
        </li>
        <li>
          <label>Fat: </label>
          {data.fat}
        </li>
        <li>
          <label>Saturated fat: </label>
          {data.saturatedFat}
        </li>
        <li>
          <label>Monounsaturated fat: </label>
          {data.monoUnsaturatedFat}
        </li>
        <li>
          <label>Polyunsaturated fat: </label>
          {data.polyUnsaturatedFat}
        </li>
        <li>
          <label>Carbohydrates: </label>
          {data.carbohydrates}
        </li>
        <li>
          <label>Sugars: </label>
          {data.sugars}
        </li>
        <li>
          <label>Protein: </label>
          {data.protein}
        </li>
        <li>
          <label>Salt: </label>
          {data.salt}
        </li>
        <li>
          <label>Fiber: </label>
          {data.fiber}
        </li>
      </ul>
      <DeleteButton onClick={deleteFoodPortion} />
    </div>
  )
}

export default FoodPortion