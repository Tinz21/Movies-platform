import React, { createContext, useState } from 'react'
import { NavBar } from './navBar/NavBar'
import { PaginatedItems } from './PaginatedItems'
import { Promotions } from './Promotions'

export const Context = createContext()

function ContextMovies () {
  const initialFilter = { genre: null, year: null, title: null }
  const [filt, setFilt] = useState(initialFilter)
  return (
    <Context.Provider value={{ filt, setFilt }}>
      <NavBar />
      <div>
        <Promotions />
        <PaginatedItems />
      </div>
    </Context.Provider>
  )
}

export { ContextMovies }
