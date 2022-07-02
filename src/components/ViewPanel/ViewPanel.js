import React from "react"

import styles from "./ViewPanel.module.css"

const ViewPanel = ({ view, toggleViewDetails }) => {
  return (
    <div className={styles.ViewPanel}>
      {view ?
        <button className={styles.ViewPanelButtonEnabled} onClick={toggleViewDetails}>Hide details</button> :
        <button className={styles.ViewPanelButtonDisabled} onClick={toggleViewDetails}>View details</button>
      }      
    </div>
  )
}

export default ViewPanel