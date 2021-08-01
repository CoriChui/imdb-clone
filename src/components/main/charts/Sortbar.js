import React from 'react'

function Sortbar() {
  return (
    <div className="charts__sortbar">
      <p>Showing 100 Titles</p>
      <div className="charts__sortbar--select">
        <p>Sort by:</p>
        <select name="choice">
          <option value="first">Ranking</option>
          <option value="second" selected>IMDb rating</option>
          <option value="third">Release Date</option>
          <option value="third">Number of ratings</option>
          <option value="third">Your Rating</option>
        </select>
        <p>&#8645;</p>
      </div>
    </div>
  )
}

export default Sortbar
