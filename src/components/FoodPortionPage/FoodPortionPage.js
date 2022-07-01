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
import DailyFoodSummary from "../DailyFoodSummary/DailyFoodSummary";

const FoodPortionPage = () => {
  const API_URL = process.env.REACT_APP_API_URL

  const [foodData, getFoodData, isLoadingFood] = useApi(`${API_URL}/food`)
  const [activeFood, setActiveFood] = useState(null)
  const [foodPortionData, getFoodPortionData, isLoadingFoodPortion] = useApi(`${API_URL}/foodportion`, "dateConsumed")
  const [date, setDate] = useState(new Date());

  const calendarOnChange = async date => {
    setDate(date)
    getFoodPortionData(`${date.getFullYear()}-${date.getMonth()+1}-${date.getDate()}`)
  }

  return (
    <div className={styles.FoodPortionPage}>
      {isLoadingFood ? "Loading food" : <FoodSelector foodData={foodData} activeFood={activeFood} setActiveFood={setActiveFood} />}
      {isLoadingFoodPortion ? "Loading food portions" :
        <>
          <div className={styles.FoodPortionForms}>
            <CreateFoodPortionForm 
              activeFood={activeFood} 
              getFoodPortionData={getFoodPortionData}              
              date={date}
            />
            <Calendar onChange={calendarOnChange} value={date} />
            <DailyFoodSummary foodInstances={foodPortionData}/>  
          </div>
          <FoodPortionContainer 
            foodPortionData={foodPortionData} 
            getFoodPortionData={getFoodPortionData}
            date={date}
          />   
        </>
      }
    </div>
  )
}

export default FoodPortionPage