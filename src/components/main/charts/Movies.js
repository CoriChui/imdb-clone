import React from 'react'
import Movie from './Movie'
import { movies } from '../../../movies'


function Movies() {

  return (
    <div className="charts__movies">
      <div className="charts__movies--header">
        <p>Rank & Title</p>
        <p>IMDb <br />Rating</p>
        <p>Your <br />Rating</p>
      </div>
      {movies && movies.map((movie, index) => (<Movie movie={movie} key={index} index={index} />))}
    </div>
  )
}

export default Movies
