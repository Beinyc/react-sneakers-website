import React from 'react'

import search from '../images/search.svg'

export default function Main() {
  return (
    <div className='search mb-40 d-flex justify-between align-center'>
          <h1>Все кроссовки</h1>
          <div className='d-flex align-center header__search-input'>
            <img src={search} alt='search'className='header__search-image'/>
            <input className='header__input' placeholder='Поиск...'></input>
          </div>
      </div>
  )
}
