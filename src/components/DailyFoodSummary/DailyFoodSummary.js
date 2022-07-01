import React from "react"

import styles from "./DailyFoodSummary.module.css"

const DailyFoodSummary = ({ foodInstances }) => {

  const calculateDailyAmounts = foodInstances => {    
    if (foodInstances !== null) {
      const dailySummary = {        
        energy: foodInstances.reduce((acc, obj) => acc + (obj.energy || 0.0), 0.0),
        fat: foodInstances.reduce((acc, obj) => acc + (obj.fat || 0.0), 0.0),
        saturatedFat: foodInstances.reduce((acc, obj) => acc + (obj.saturatedFat || 0.0), 0.0),
        monoUnsaturatedFat: foodInstances.reduce((acc, obj) => acc + (obj.monoUnsaturatedFat || 0.0), 0.0),
        polyUnsaturatedFat: foodInstances.reduce((acc, obj) => acc + (obj.polyUnsaturatedFat || 0.0), 0.0),
        carbohydrates: foodInstances.reduce((acc, obj) => acc + (obj.carbohydrates || 0.0), 0.0),
        sugars: foodInstances.reduce((acc, obj) => acc + (obj.sugars || 0.0), 0.0),
        protein: foodInstances.reduce((acc, obj) => acc + (obj.protein || 0.0), 0.0),
        salt: foodInstances.reduce((acc, obj) => acc + (obj.salt || 0.0), 0.0),
        fiber: foodInstances.reduce((acc, obj) => acc + (obj.fiber || 0.0), 0.0),
      }
      return dailySummary
    }
    return null
  }

  const roundTo = (number, precision) => {
    return Math.round(number * (10**precision)) / (10**precision)
  }

  const dailySummary = calculateDailyAmounts(foodInstances)

  return (
    <div className={styles.DailyFoodSummary}>
      <h3>Summary</h3>
      <ul>
        <li>Total energy: {roundTo(dailySummary.energy, 2)}</li>
        <li>Total fat: {roundTo(dailySummary.fat, 2)}</li>
        <li>Total saturated fat: {roundTo(dailySummary.saturatedFat, 2)}</li>
        <li>Total monounsaturated fat: {roundTo(dailySummary.monoUnsaturatedFat, 2)}</li>
        <li>Total polyunsaturated fat: {roundTo(dailySummary.polyUnsaturatedFat, 2)}</li>
        <li>Total carbohydrates: {roundTo(dailySummary.carbohydrates, 2)}</li>
        <li>Total sugars: {roundTo(dailySummary.sugars, 2)}</li>
        <li>Total protein: {roundTo(dailySummary.protein, 2)}</li>
        <li>Total salt: {roundTo(dailySummary.salt, 2)}</li>
        <li>Total fiber: {roundTo(dailySummary.fiber, 2)}</li>
      </ul>
    </div>
  )
}

export default DailyFoodSummary