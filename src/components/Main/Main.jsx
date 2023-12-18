import React from 'react'
import './Main.css'

import search from '../../images/search.svg'

export default function Main({onCgangeSearchInput, searchValue}) {
  return (
    <div className='main-search'>
          <h1>{searchValue ? `Поиск по запросу: "${searchValue}"` : 'Вск кроссовки'}</h1>
          <div className='main__conteiner'>
            <img src={search} alt='search'className='main__search-image'/>
            <input onChange={onCgangeSearchInput} value={searchValue} className='main__input' placeholder='Поиск...'></input>
          </div>
      </div>
  )
}
