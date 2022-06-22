import React from "react"
import { Link } from "react-router-dom"
import styles from "./Navbar.module.css"

const Navbar = () => {
  return (
    <div className={styles.Navbar}>
      <ul className={styles.NavbarUl}>
        <Link to="/food">
          <li>Add/remove foods</li>
        </Link>
        <Link to="/foodportion">
          <li>Add/remove food portions</li> 
        </Link>       
      </ul>
    </div>
  )
}

export default Navbar