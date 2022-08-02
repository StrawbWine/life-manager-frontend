import axios from "axios"
import React from "react"
import { useNavigate } from "react-router-dom"

import styles from "./CreateFoodForm.module.css"
import API_URL from "../../constants"

const CreateFoodForm = ({ getFoods, token }) => {
  const navigate = useNavigate()
  
  const handleSubmit = async event => {     
    event.preventDefault()
    const newFood = {
      name: document.getElementById("name-input").value || null,
      energy: document.getElementById("energy-input").value || null,
      fat: document.getElementById("fat-input").value || null,
      saturatedFat: document.getElementById("saturatedFat-input").value || null,
      monoUnsaturatedFat: document.getElementById("monoUnsaturatedFat-input").value || null,
      polyUnsaturatedFat: document.getElementById("polyUnsaturatedFat-input").value || null,
      carbohydrates: document.getElementById("carbohydrates-input").value || null,
      sugars: document.getElementById("sugars-input").value || null,
      protein: document.getElementById("protein-input").value || null,
      salt: document.getElementById("salt-input").value || null,
      fiber: document.getElementById("fiber-input").value || null
    }
    const config = {
      headers: { Authorization: `Bearer ${token}` }
    }
    try {
      await axios.post(`${API_URL}/food`, newFood, config)      
    } catch (error) {
      console.log(error.message)
      if (error.response.status === 401) {
        navigate("/login")
      }     
    }
    getFoods()
  }

  return (
    <>      
      <form className={styles.Form} onSubmit={handleSubmit} >
        <h4 className={styles.FormTitle}>Add new food</h4>
        <label>Name:</label>
        <input type="text" name="name" id="name-input" />
        <label>Energy:</label>
        <input type="text" name="energy" id="energy-input" />
        <label>Fat:</label>
        <input type="text" name="fat" id="fat-input" />
        <label>Saturated fat:</label>
        <input type="text" name="saturatedFat" id="saturatedFat-input" />
        <label>Monounsaturated fat:</label>
        <input type="text" name="monoUnsaturatedFat" id="monoUnsaturatedFat-input" />
        <label>Polyunsaturated fat:</label>
        <input type="text" name="polyUnsaturatedFat" id="polyUnsaturatedFat-input" />
        <label>Carbohydrates:</label>
        <input type="text" name="carbohydrates" id="carbohydrates-input" />
        <label>Sugars:</label>
        <input type="text" name="sugars" id="sugars-input" />
        <label>Protein:</label>
        <input type="text" name="protein" id="protein-input" />
        <label>Salt:</label>
        <input type="text" name="salt" id="salt-input" />
        <label>Fiber:</label>
        <input type="text" name="fiber" id="fiber-input" />
        <input className={styles.SubmitButton} type="submit" value="Add new food" />
      </form>
    </>

  )
}

export default CreateFoodForm