import React, { useState } from "react"
import Food from "../Food/Food"
import styles from "./FoodContainer.module.css"
import ViewPanel from "../ViewPanel/ViewPanel"

const FoodContainer = ({ foodArray, getFoods, activeFood, setActiveFood }) => {
  const [viewDetails, setViewDetails] = useState(false)

  const toggleViewDetails = () => {
    setViewDetails(!viewDetails)
  }

  return (
    <div className={styles.FoodContainer}>
      <ViewPanel view={viewDetails} toggleViewDetails={toggleViewDetails}/>
      <div className={styles.FoodList}>
        {foodArray.map(foodProps =>
          <Food 
            key={foodProps.id} 
            foodProps={foodProps} 
            getFoods={getFoods}
            selected={activeFood === foodProps.id}
            setActiveFood={setActiveFood}   
            viewDetails={viewDetails}       
          />)}
      </div>
    </div>
  )
}

export default FoodContainer