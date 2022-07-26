import { useState, useEffect } from "react"
import axios from "axios"

const useApi = (url, token="", paramName="", initialParamValue="") => {
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  const config = {
    headers: { Authorization: `Bearer ${token}` }
  };

  const getData = async (paramValue="") => {    
    let fullUrl = url
    if (paramName && paramValue) {
      fullUrl = `${url}?${paramName}=${paramValue}`
    }
    try {
      const result = await axios.get(fullUrl, config)
      setData(result.data)
    } catch (error) {
      console.error(error)
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