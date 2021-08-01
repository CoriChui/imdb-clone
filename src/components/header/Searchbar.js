import React, { useRef } from 'react'
import { useClickOutside } from '../../hooks'
import { useDispatch, useSelector } from 'react-redux'
import MagnifyingGlass from '../../img/magnifying-glass.png'
import { showQuery, hideQuery, changeQuery } from '../../redux/actions'

function Searchbar() {

  const isSearchOpen = useSelector(state => state.search)
  const dispatch = useDispatch()
  const query = useSelector(state => state.query)
  const searchbarRef = useRef()
  const options = [
    {
      name: 'All',
      svg: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M23.832 19.641l-6.821-6.821c2.834-5.878-1.45-12.82-8.065-12.82-4.932 0-8.946 4.014-8.946 8.947 0 6.508 6.739 10.798 12.601 8.166l6.879 6.879c1.957.164 4.52-2.326 4.352-4.351zm-14.886-4.721c-3.293 0-5.973-2.68-5.973-5.973s2.68-5.973 5.973-5.973c3.294 0 5.974 2.68 5.974 5.973s-2.68 5.973-5.974 5.973z" /></svg>
    },
    {
      name: 'Titles',
      svg: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M0 1v22h24v-22h-24zm4 20h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm14 16h-12v-8h12v8zm0-10h-12v-8h12v8zm4 10h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2zm0-4h-2v-2h2v2z" /></svg>
    },
    {
      name: 'Episodes',
      svg: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M22 4v12h-20v-12h20zm2-2h-24v16h24v-16zm-17 18c1 1.194 2.862 2 5 2s4-.806 5-2h-10z" /></svg>
    },
    {
      name: 'Celebs',
      svg: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M10.118 16.064c2.293-.529 4.428-.993 3.394-2.945-3.146-5.942-.834-9.119 2.488-9.119 3.388 0 5.644 3.299 2.488 9.119-1.065 1.964 1.149 2.427 3.394 2.945 1.986.459 2.118 1.43 2.118 3.111l-.003.825h-15.994c0-2.196-.176-3.407 2.115-3.936zm-10.116 3.936h6.001c-.028-6.542 2.995-3.697 2.995-8.901 0-2.009-1.311-3.099-2.998-3.099-2.492 0-4.226 2.383-1.866 6.839.775 1.464-.825 1.812-2.545 2.209-1.49.344-1.589 1.072-1.589 2.333l.002.619z" /></svg>
    },
    {
      name: 'Companies',
      svg: <svg width="16" height="16" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M24 24h-22v-24h14v8h8v16zm-16-5h-3v4h3v-4zm5 0h-3v4h3v-4zm8 0h-3v4h3v-4zm-15-5h-2v2h2v-2zm8 0h-2v2h2v-2zm-4 0h-2v2h2v-2zm9 0h-2v2h2v-2zm3 0h-2v2h2v-2zm-16-4h-2v2h2v-2zm8 0h-2v2h2v-2zm-4 0h-2v2h2v-2zm9 0h-2v2h2v-2zm3 0h-2v2h2v-2zm-16-4h-2v2h2v-2zm8 0h-2v2h2v-2zm-4 0h-2v2h2v-2zm-4-4h-2v2h2v-2zm8 0h-2v2h2v-2zm-4 0h-2v2h2v-2z" /></svg>
    },
    {
      name: 'Keywords',
      svg: <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24"><path d="M17 5h-17v14h17l7-7z" /></svg>
    },
  ]

  const queryPopupRef = useClickOutside(() => {
    dispatch(hideQuery())
  })

  const searchItem = (option, svg) => {
    return <div onClick={() => { onQuerySelectedHandler(option) }} className={`query-popup__item ${option === query ? 'selected' : ''}`} >
      {svg}
      <h3>{option}</h3>
    </div>
  }

  const onQueryClickHandler = (e) => {
    e.preventDefault()
    dispatch(showQuery())
  }

  const onQuerySelectedHandler = (query) => {
    dispatch(changeQuery(query))
    dispatch(hideQuery())
    searchbarRef.current.blur()
  }

  return (
    <div className="searchbar" ref={searchbarRef} tabIndex="100">
      <div className="searchbar--selector" onClick={onQueryClickHandler}>
        {query}
      </div>
      <div ref={queryPopupRef} className={`query-popup query-popup--${isSearchOpen ? 'open' : 'hidden'}`}>
        {options.map(option => {
          return searchItem(option.name, option.svg)
        })}
      </div>
      <input type="text" className="searchbar--input" placeholder="Search IMDB" />
      <div className="searchbar--after">
        <img src={MagnifyingGlass} alt="" />
      </div>
    </div>
  )
}

export default Searchbar
