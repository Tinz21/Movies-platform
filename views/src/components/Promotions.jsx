import axios from 'axios'
import React, { useEffect, useMemo, useState } from 'react'
import { getMovies } from '../utilities/getMovies'
import { useDebounce } from 'use-debounce'
import './Promotions.css'

const urlBackend = 'http://127.0.0.1:8000/slides'

function Promotions () {
  const [slide, setSlide] = useState(null)
  const [currentIndex, setCurrentIndex] = useState(-1)
  const [debounced] = useDebounce(currentIndex, 10000)

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

  useMemo(() => {
    if (currentIndex === 4) {
      setCurrentIndex(0)
    } else {
      setCurrentIndex(currentIndex + 1)
    }
  }, [debounced])

  if (slide) {
    const movie = getMovies(slide[currentIndex])
    return (
      <div className='slides'>
        <div className='containerImg'>
          <img src={movie.url} alt={movie.title} className='imgBackground' />
        </div>
        <p>{movie.title}  ({movie.year})</p>
        <div className='slides-navegators'>
          {slide.map((item, index) => {
            return (
              <div key={index}>
                <button
                  onClick={() => setCurrentIndex(index)}
                  style={index === currentIndex ? { scale: '1.4', backgroundColor: 'gray' } : null}
                />
              </div>
            )
          })}
        </div>
      </div>
    )
  } else {
    return (
      <p>Cargando slide ...</p>
    )
  }
}

export { Promotions }
