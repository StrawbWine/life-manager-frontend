import React from "react"
import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <ul className={styles.NavbarUl}>
        <li>Add/remove foods</li>
        <li>Add/remove food portions</li>        
      </ul>
    </div>
  )
}

export default Navbar