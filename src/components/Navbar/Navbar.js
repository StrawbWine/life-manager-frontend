import React, { useState } from "react"
import { Link } from "react-router-dom"

import styles from "./Navbar.module.css"
import NavbarButton from "../Buttons/NavbarButton/NavbarButton"

const Navbar = () => {
  const [active, setActive] = useState(null)

  const linkStyle = {
    textDecoration: 'none'
  }

  return (
    <div className={styles.Navbar}>
      <ul className={styles.NavbarUl}>
        <Link to="/food" style={linkStyle} >
          <li>
            <NavbarButton 
              id="to-food"
              text="Add/remove food"
              isActive={active === "to-food"}
              setActive={setActive}
            />
          </li>
        </Link>
        <Link to="/foodportion" style={linkStyle}>
          <li>
            <NavbarButton
              id="to-food-portion"
              text="Add/remove food portions"
              isActive={active === "to-food-portion"}
              setActive={setActive}
            />
          </li> 
        </Link>       
      </ul>
    </div>
  )
}

export default Navbar