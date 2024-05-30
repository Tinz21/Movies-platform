import React, { useRef, useContext } from 'react'
import { FiSearch } from 'react-icons/fi'
import { Context } from '../ContextMovies'
import { TabPanel } from './TabPanel'
import logo from '../../img/logo1.png'
import './NavBar.css'

function NavBar () {
  const searchForm = useRef()
  const { setFilt } = useContext(Context)

  const onSearch = (event) => {
    event.preventDefault()
    const name = searchForm.current.value
    const filter = { title: (name.length > 0 ? name : null) }
    setFilt(filter)
    console.log(filter)
  }
  const onHome = () => setFilt({ title: null })

  return (
    <section>
      <img className='logo' src={logo} alt='Logo' onClick={onHome} />
      <div className='navbar'>
        <TabPanel />
        <form onSubmit={onSearch} className='formSearch'>
          <input className='formSearch-input' ref={searchForm} type='text' placeholder='Buscar...' />
          <button className='formSearch-btn'><FiSearch /></button>
        </form>
      </div>
    </section>
  )
}

export { NavBar }
