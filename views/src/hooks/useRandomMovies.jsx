import { useState, useEffect } from 'react'
import axios from 'axios'

const urlBackend = 'http://127.0.0.1:8000/slides'

export function useRandomMovies () {
  const [slide, setSlide] = useState(null)
  useEffect(() => {
    axios({
      method: 'get',
      url: urlBackend
    }).then((res) =>
      res.data
    ).then((res) => {
      setSlide(res)
    })
  }, [])
  return slide
}
