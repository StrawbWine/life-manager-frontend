import axios from "axios"
import React from "react"
import styles from "./CreateFoodPortionForm.module.css"
import DateToString from "../../utils/DateParser"
import API_URL from "../../constants"

const CreateFoodPortionForm = ({ activeFood, getFoodPortionData, setFoodPortionData, date, token }) => {

  const handleSubmit = async event =>  {
    event.preventDefault()
    const newFoodPortion = {
      foodId: activeFood,
      weightInGrams: document.getElementById("weight-input").value,
      dateConsumed: DateToString(new Date())
    }
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    }
    await axios.post(`${API_URL}/foodportion`, newFoodPortion, config)
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