import React, { useContext } from 'react'
import { BsChevronDown } from 'react-icons/bs'
import { Context } from '../ContextMovies'
import './Tab.css'

function Tab ({ props, isActive, onClick, isMenu }) {
  const { filt, setFilt } = useContext(Context)

  const onTab = () => {
    onClick()
    if (props.title === 'Inicio') {
      setFilt('')
    }
  }
  const filterSelected = (item) => {
    onClick()
    if (filt.title) {
      setFilt({ [props.filter]: item })
    } else {
      setFilt({ ...filt, ...{ [props.filter]: item } })
    }
  }

  return (
    <li>
      <div onClick={onTab} className='tabpanel-tab'>
        <p>{props.title}</p>
        {isMenu ? <BsChevronDown className='tabpanel-tab-arrow' /> : null}
      </div>
      <div className={`tabpanel-${isActive ? 'menuactive' : 'menuhiden'}`}>
        {`${isMenu}` === 'true' ? <p> </p> : null}
        <ul>
          {
            props.options.map((item) => {
              return (
                <li key={item} onClick={() => filterSelected(item)} className='tabpanel-menuactive--list'>
                  {item}
                </li>
              )
            })
          }
        </ul>
      </div>
    </li>
  )
}
export { Tab }
