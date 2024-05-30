import React, { useRef, useState } from 'react'
import { FiAlignJustify, FiX } from 'react-icons/fi'
import tabs from '../../utilities/navBarOptions'
import { Tab } from './Tab'
import './TabPanel.css'

function TabPanel () {
  const [activeTab, setActiveTab] = useState(null)
  const navRef = useRef()
  const showNavbar = () => {
    navRef.current.classList.toggle(
      'responsive_nav'
    )
  }
  return (
    <div className='tabpanel'>
      <button onClick={showNavbar} className='tabpanel-btn'>
        <FiAlignJustify />
      </button>
      <ul ref={navRef}>
        <button onClick={showNavbar} className='tabpanel-btn close'><FiX /></button>
        {tabs.map((tab, index) => (
          <Tab
            key={index}
            props={tab}
            isActive={activeTab === index}
            isMenu={tab.isMenu}
            onClick={() => index === activeTab ? setActiveTab(null) : setActiveTab(index)}
          />
        ))}
      </ul>
    </div>
  )
}
export { TabPanel }
