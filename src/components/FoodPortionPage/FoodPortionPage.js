import React from "react"
import { useState } from "react"
import Calendar from "react-calendar"
import 'react-calendar/dist/Calendar.css';
import axios from "axios"

import styles from "./FoodPortionPage.module.css"
import FoodSelector from "../FoodSelector/FoodSelector"
import useApi from "../../hooks/useApi"
import CreateFoodPortionForm from "../CreateFoodPortionForm/CreateFoodPortionForm"
import FoodPortionContainer from "../FoodPortionContainer/FoodPortionContainer"

const FoodPortionPage = () => {
  const API_URL = process.env.REACT_APP_API_URL

  const [foodData, getFoodData, setFoodData] = useApi(`${API_URL}/food`)
  const [activeFood, setActiveFood] = useState(null)
  const [foodPortionData, getFoodPortionData, setFoodPortionData] = useApi(`${API_URL}/foodportion`)
  const [date, setDate] = useState(new Date());

  const calendarOnChange = async date => {
    setDate(date)
    try {      
      const result = await axios.get(`${API_URL}/foodportion?dateConsumed=${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`)   
      setFoodPortionData(result.data)
    } catch (error) {
      console.error(error);
    }
  }
  return (
    <div className={styles.FoodPortionPage}>
      <FoodSelector foodData={foodData} activeFood={activeFood} setActiveFood={setActiveFood} />
      <div className={styles.FoodPortionForms}>
        <CreateFoodPortionForm activeFood={activeFood} getFoodPortionData={getFoodPortionData} />
        <Calendar onChange={calendarOnChange} value={date} />   
      </div>
      <FoodPortionContainer foodPortionData={foodPortionData} getFoodPortionData={getFoodPortionData} />         
    </div>
  )
}

export default FoodPortionPage