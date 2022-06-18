import { useState, useEffect } from "react"
import axios from "axios"

const useApi = url => {
  const [data, setData] = useState([])

  const fetchData = async () => {
    try {      
      const result = await axios.get(url)   
      setData(result.data)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    fetchData()
  }, [])

  return [data, fetchData, setData]
}

export default useApi