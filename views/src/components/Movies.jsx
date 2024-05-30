/*
  Render a list of movies
*/
import React, { useState } from 'react'
import { getMovies } from '../utilities/getMovies'
import { Modal } from './Modal'
import './Movies.css'

function Movies ({ data }) {
  const [modal, setModal] = useState(null)
  const onSelectMovie = (item) => {
    setModal(item)
  }
  if (data) {
    return (
      <div className='movies'>
        {data.map((item) => {
          const movie = getMovies(item)
          return (
            <li className='movie' key={movie.url}>
              <div onClick={() => onSelectMovie(movie)} className='imgmovie'>
                <img className='imgmovie-poster' src={movie.url} alt={movie.title} />
                <p className='imgmovie-year'>{movie.year}</p>
              </div>
              <p className='title'>{movie.title}</p>
            </li>
          )
        })}
        {modal
          ? <Modal
              title={modal.title} poster={modal.url} year={modal.year}
              overview={modal.overview} language={modal.language}
              calification={modal.calification}
              popularity={modal.popularity}
              setModal={setModal}
            />
          : null}
      </div>
    )
  } else {
    return (
      <>
        <p>hola no hay nada</p>
      </>
    )
  }
}

export { Movies }
