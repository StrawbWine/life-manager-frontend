import { useState } from "react"

export default function useToken() {
  const getToken = () => {
    const tokenString = localStorage.getItem("token")
    return tokenString
    // console.log(tokenString)
    // const userToken = JSON.parse(tokenString)
    // return userToken?.token
  }
  const [token, setToken] = useState(getToken())

  const saveToken = userToken => {
    localStorage.setItem("token", userToken)
    setToken(userToken)
  }

  return [
    token,
    saveToken
  ]
}
