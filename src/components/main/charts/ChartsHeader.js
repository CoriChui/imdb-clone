import React from 'react'
import Share from './Share'

function Title() {
  return (
    <div className="charts__header">
      <div className="charts__header--left">
        <h3>IMDb Charts</h3>
        <h2>Most Popular Movies</h2>
        <p>As determined by IMDb Users</p>
      </div>
      <Share />
    </div>
  )
}

export default Title
