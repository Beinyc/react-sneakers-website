import React from 'react'
import './Card.css'

export default function Card() {
  return (
      <div className='card__favorite'>
        <div className='card__favorites'>
          <img src='/img/heard-unliked.svg' alt='unliked'/>
        </div>
          <img width={133} height={112} src='./img/sneakers/sneakers 1.jpg'alt='кроссовки'/>
          <h5 className='card__title'>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className='card__button'>
          <div className='card__full-price'>
              <div className='card__total-price'>
                <span className='card_prise'>Цена:</span>
                <b className='card__prises'>12 999 руб.</b>
              </div>
          </div>
            <button className='button'>
            <img width={11} height={11} src='./img/buttons/add-button.svg' alt='Plus'/>
          </button>
          </div>
        </div>
  )
}
