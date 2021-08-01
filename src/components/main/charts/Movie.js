import React from 'react'
import { Link } from 'react-router-dom'

function Movie({ movie, index }) {
  return (
    <div className={index % 2 == 0 ? 'charts__movies--movie even' : 'charts__movies--movie odd'}>
      <img src={movie.photoUrl} alt="" />
      <div className="title">
        <p>
          <Link to={{
            pathname: "/movie",
            state: {
              movie: movie
            },
          }} >
            <span style={{ color: '#1381c8', cursor: "pointer" }}>
              {movie.title}
            </span>
          </Link>
          {movie.year}
        </p>
        <p>{index + 1}</p>
      </div>
      <h5>{movie.rate}</h5>
      <h3>&#9734;</h3>
      <svg
        width="24"
        height="24"
        xmlns="http://www.w3.org/2000/svg"
        class="ipc-icon ipc-icon--watchlist ipc-button__icon ipc-button__icon--pre"
        viewBox="0 0 24 24"
        fill="currentColor"
        role="presentation">
        <path d="M17 3c1.05 0 1.918.82 1.994 1.851L19 5v16l-7-3-7 3V5c0-1.05.82-1.918 1.851-1.994L7 3h10zm-4 4h-2v3H8v2h3v3h2v-3h3v-2h-3V7z" fill="currentColor"></path>
      </svg>
    </div>
  )
}

export default Movie
