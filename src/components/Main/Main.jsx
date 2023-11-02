import React from 'react'
import './Main.css'

import search from '../../images/search.svg'

export default function Main() {
  return (
    <div className='main-search'>
          <h1>Все кроссовки</h1>
          <div className='main__conteiner'>
            <img src={search} alt='search'className='main__search-image'/>
            <input className='main__input' placeholder='Поиск...'></input>
          </div>
      </div>
  )
}
