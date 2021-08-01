import React from 'react'
import Menu from './Menu'
import Searchbar from './Searchbar'
import { show } from '../../redux/actions'
import { useDispatch } from 'react-redux'

function Header() {

  const dispatch = useDispatch()

  const onMenuClickHandler = (e) => {
    e.preventDefault()
    dispatch(show())
    document.body.style.overflow = 'hidden';
  }

  return (
    <div className="header">
      <div className="header__inner">
        <span className="logo"><i className="fab fa-imdb fa-2x"></i></span>
        <div className="nav" onClick={onMenuClickHandler}>
          <i class="fas fa-bars"></i>
          <h5 className="nav__label">Menu</h5>
        </div>
        <Searchbar />
        <h5 className="imdb-pro">IMDbPro</h5>
        <div className="divider"></div>
        <div className="watchlist">
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
          <h5>Watchlist</h5>
        </div>
        <h5 className="sign-in">Sign In</h5>
      </div>
      <Menu />
    </div>
  )
}

export default Header
