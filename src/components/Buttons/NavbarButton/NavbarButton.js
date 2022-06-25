import React from "react"

import styles from "./NavbarButton.module.css"

const NavbarButton = ({ id, text, isActive, setActive }) => {
  const handleClick = () => {
    setActive(id)  
  }

  return (
    <div 
      className={isActive ? styles.NavbarButtonActive : styles.NavbarButton}
      onClick={handleClick}
    >
      {text}
    </div>
  )
}

export default NavbarButton