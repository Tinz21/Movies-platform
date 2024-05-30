import React, { useContext, useState } from 'react'
import ReactPaginate from 'react-paginate'
import { useFetch } from '../hooks/useFetch'
import { Context } from './ContextMovies'
import { Movies } from './Movies'
import './PaginatedItems.css'

function PaginatedItems () {
  const [itemOffset, setItemOffset] = useState(0)
  const { filt } = useContext(Context)
  const items = useFetch(filt)

  const itemsPerPage = 50
  const endOffset = itemOffset + itemsPerPage
  let { currentItems, pageCount } = [0, 0]

  if (items) {
    currentItems = items.slice(itemOffset, endOffset)
    pageCount = Math.ceil(items.length / itemsPerPage)
  }

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length
    setItemOffset(newOffset)
  }
  return (
    <>
      <Movies data={currentItems} />
      <ReactPaginate
        breakLabel='...'
        nextLabel='>'
        onPageChange={handlePageClick}
        pageCount={pageCount}
        previousLabel='<'
        renderOnZeroPageCount={null}
        className='ReactPaginate'
      />
    </>
  )
}

export { PaginatedItems }
