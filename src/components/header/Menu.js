import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { hide } from '../../redux/actions'

function Menu() {

  const isMenuOpen = useSelector(state => state.menu)
  const dispatch = useDispatch()

  const onCloseHandler = (e) => {
    e.preventDefault()
    document.body.style.overflow = 'unset';
    dispatch(hide())
  }

  return (
    <div className={`header__menu header__menu--${isMenuOpen ? 'open' : 'hidden'}`}>
      <div className="inner">
        <div className="inner__top">
          <i className="fab fa-imdb fa-4x"></i>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="40"
            height="40"
            viewBox="0 0 24 24"
            onClick={onCloseHandler}
          >
            <path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm4.151 17.943l-4.143-4.102-4.117 4.159-1.833-1.833 4.104-4.157-4.162-4.119 1.833-1.833 4.155 4.102 4.106-4.16 1.849 1.849-4.1 4.141 4.157 4.104-1.849 1.849z" />
          </svg>
        </div>
        <div className="inner__main">
          <div className="left">
            <h2>Movies</h2>
            <h4>Release Calendar</h4>
            <h4>Top Rated Movies</h4>
            <h4>Most Popular Movies</h4>
            <h4>Browse Movies by Genre</h4>
            <h4>top Box Office</h4>
            <h4>Coming Soon</h4>
          </div>
          <div className="middle">
            <h2>TV Shows</h2>
            <h4>What's on TV & Streaming</h4>
            <h4>Top Rated Shows</h4>
            <h4>Most Popular Shows</h4>
            <h4>Browse TV Shows by Genre</h4>
            <h4>TV News</h4>
          </div>
          <div className="right">
            <h2>Awards & Events</h2>
            <h4>Oscars</h4>
            <h4>Best Picture Winners</h4>
            <h4>Golden Globe</h4>
            <h4>Emmys</h4>
            <h4>Awards Central</h4>
            <h4>All Events</h4>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Menu
