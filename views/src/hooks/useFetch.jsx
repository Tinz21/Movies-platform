import { useEffect, useState } from 'react'
import axios from 'axios'

const urlBackend = 'http://127.0.0.1:8000/0&9000'

export function useFetch (filters) {
  const { genre, year, title } = filters
  const [data, setData] = useState(null)
  useEffect(() => {
    axios({
      method: 'get',
      url: urlBackend,
      params: filters
    })
      .then(response => {
        return response.data
      })
      .then(res => setData(res))
  }, [genre, year, title])
  return data
}
