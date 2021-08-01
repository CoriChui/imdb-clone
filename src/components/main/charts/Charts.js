import React from 'react'
import ChartsHeader from './ChartsHeader'
import Movies from './Movies'
import Sortbar from './Sortbar'

function Charts() {
  return (
    <div className="charts">
      <ChartsHeader />
      <Sortbar />
      <Movies />
    </div>
  )
}

export default Charts
