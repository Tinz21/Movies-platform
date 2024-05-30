/*
  Render a presentation of movies
  appearing under the nav bar. A space for promotional movies.
*/
import React, { useMemo, useState } from 'react'
import { useDebounce } from 'use-debounce'
import { getMovies } from '../utilities/getMovies'
import { useRandomMovies } from '../hooks/useRandomMovies'
import './Promotions.css'

function Promotions () {
  const [currentIndex, setCurrentIndex] = useState(-1)
  const [debounced] = useDebounce(currentIndex, 10000)
  const slide = useRandomMovies()

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
