import React, { useState } from "react"
import PropTypes from "prop-types"
import API_URL from "../../constants"
import axios from "axios"
import styles from "./LoginPage.module.css"
import { useNavigate } from "react-router-dom"

const loginUser = async credentials => {
  const response = await axios.post(`${API_URL}/authenticate`, credentials)
  const token = response.data
  return token
}

export default function LoginPage({ setToken }) {
  const navigate = useNavigate()
  const [username, setUserName] = useState()
  const [password, setPassword] = useState()

  const handleSubmit = async e => {
    e.preventDefault()
    const token = await loginUser({
      username,
      password,
    })
    setToken(token)
    navigate("/food")
  }

  return (
    <div className={styles.LoginPage}>
      <h1 className={styles.LoginTitle}>Please Log In</h1>
      <form className={styles.LoginForm} onSubmit={handleSubmit}>
        <label>
          <p className={styles.LoginLabel}>Username</p>
          <input type="text" onChange={e => setUserName(e.target.value)} />
        </label>
        <label>
          <p className={styles.LoginLabel}>Password</p>
          <input type="password" onChange={e => setPassword(e.target.value)} />
        </label>
        <div>
          <button className={styles.LoginButton} type="submit" >Submit</button>
        </div>
      </form>
    </div>
  )
}

LoginPage.propTypes = {
  setToken: PropTypes.func.isRequired,
}
