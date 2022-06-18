import React from "react"

import styles from "./Food.module.css"

const Food = ({ foodProps }) => {
  return (
    <div className={styles.Food}>
      <ul className={styles.ul}>
        <li className={styles.Name}>{foodProps.name}</li>
        <li>Energy: {foodProps.energy}</li>
        <li>Fat: {foodProps.fat}</li>
        <li>Saturated fat: {foodProps.saturatedFat}</li>
        <li>Monounsaturated fat: {foodProps.monoUnsaturatedFat}</li>
        <li>Polyunsaturated fat: {foodProps.polyUnsaturatedFat}</li>
        <li>Carbohydrates: {foodProps.carbohydrates}</li>
        <li>Sugars: {foodProps.sugars}</li>
        <li>Protein: {foodProps.protein}</li>
        <li>Salt: {foodProps.salt}</li>
        <li>Fiber: {foodProps.fiber}</li>
      </ul>
    </div>
  )
}

export default Food