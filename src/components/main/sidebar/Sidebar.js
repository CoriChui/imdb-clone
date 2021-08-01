import React from 'react'
import Header from './SidebarHeader'
import Categories from './Categories'
import Genres from './Genres'

function Sidebar() {
  return (
    <div className="sidebar">
      <Header />
      <Categories />
      <Genres />
    </div>
  )
}

export default Sidebar
