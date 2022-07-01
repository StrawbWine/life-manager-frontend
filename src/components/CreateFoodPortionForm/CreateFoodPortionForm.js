import axios from "axios"
import React from "react"
import styles from "./CreateFoodPortionForm.module.css"

const CreateFoodPortionForm = ({ activeFood, getFoodPortionData, setFoodPortionData, date }) => {
  const API_URL = process.env.REACT_APP_API_URL

  const handleSubmit = async event =>  {
    event.preventDefault()
    const newFoodPortion = {
      foodId: activeFood,
      weightInGrams: document.getElementById("weight-input").value,
      dateConsumed: new Date()
    }    
    await axios.post(`${API_URL}/foodportion`, newFoodPortion)
    // const updatedFoodPortionst = await axios.get(
    //   `${API_URL}/foodportion?dateConsumed=${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`
    // )
    // setFoodPortionData(updatedFoodPortions)
    getFoodPortionData(`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`)
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