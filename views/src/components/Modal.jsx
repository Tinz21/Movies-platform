import React from 'react'
import { createPortal } from 'react-dom'
import { FiX } from 'react-icons/fi'
import './Modal.css'

function Modal ({ ...modal }) {
  console.log(modal.title)
  return createPortal(
    <div className='modal'>
      <button onClick={() => modal.setModal(null)}><FiX /></button>
      <div className='modal-poster'>
        <img src={modal.poster} alt={modal.title} />
      </div>
      <div className='modal-overview'>
        <p className='modal-overview--title'>{modal.title}</p>
        <p className='modal-overview--p'>{modal.overview}</p>
        <p>{modal.year}</p>
        <p>Original language: {modal.language}</p>
        <p>Calification: {modal.calification}</p>
        <p>Count votes: {modal.popularity}</p>
      </div>
    </div>,
    document.body
  )
}
export { Modal }
