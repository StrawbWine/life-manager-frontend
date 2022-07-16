import axios from "axios"
import React from "react"
import styles from "./CreateFoodPortionForm.module.css"
import DateToString from "../../utils/DateParser"

const CreateFoodPortionForm = ({ activeFood, getFoodPortionData, setFoodPortionData, date }) => {
  const API_URL = process.env.REACT_APP_API_URL

  const handleSubmit = async event =>  {
    event.preventDefault()
    const newFoodPortion = {
      foodId: activeFood,
      weightInGrams: document.getElementById("weight-input").value,
      dateConsumed: DateToString(new Date())
    }    
    await axios.post(`${API_URL}/foodportion`, newFoodPortion)
    getFoodPortionData(DateToString(date))
  }

  return (
    <form className={styles.CreateFoodPortionForm} onSubmit={handleSubmit}>
      <label>Weight:</label>
      <input type="text" name="weight" id="weight-input" required />
      <input type="submit" value="Add new portion" />
    </form>
  )
}

export default CreateFoodPortionForm