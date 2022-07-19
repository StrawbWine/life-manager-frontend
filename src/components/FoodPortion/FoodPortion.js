import React from "react"
import axios from "axios"

import styles from "./FoodPortion.module.css"
import DeleteButton from "../Buttons/DeleteButton/DeleteButton"
import DateToString from "../../utils/DateParser"
import API_URL from "../../constants"

const FoodPortion = ({ data, getFoodPortionData, date }) => {

  const deleteFoodPortion = async () => {
    await axios.delete(`${API_URL}/foodportion/${data.id}`)
    getFoodPortionData(DateToString(date))
  }

  return (
    <div className={styles.FoodPortion}>
      <h4>{data.food.name}</h4>
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