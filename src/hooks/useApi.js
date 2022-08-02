import { useState, useEffect } from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

const useApi = (url, token="", paramName="", initialParamValue="") => {
  const navigate = useNavigate()
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const config = {
    headers: { Authorization: `Bearer ${token}` }
  }

  const getData = async (paramValue="") => {    
    let fullUrl = url
    if (paramName && paramValue) {
      fullUrl = `${url}?${paramName}=${paramValue}`
    }
    try {      
      const result = await axios.get(fullUrl, config)
      setData(result.data)
      return result
    } catch (error) {
      console.error(error)
      if (error.response.status === 401) {
        navigate("/login")
      } 
    } finally {
      setLoading(false)
    }
  } 

  useEffect(() => {
    getData(initialParamValue)
  }, [])

  return [data, getData, loading, error]
}

export default useApi