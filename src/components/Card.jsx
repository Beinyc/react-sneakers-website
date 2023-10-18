import React from 'react'

export default function Card() {
  return (
    <div className="content p-40">
      <div className='d-flex'>
      <div className='card'>
        <div className='favorite'>
          <img src='/img/heard-unliked.svg' alt='unliked'/>
        </div>
          <img width={133} height={112} src='./img/sneakers/sneakers 1.jpg'alt='кроссовки'/>
          <h5 className='card__h5'>Мужские Кроссовки Nike Blazer Mid Suede</h5>
          <div className='cardButton d-flex justify-between'>
          <div className='flex-column align-center'>
              <div className='d-flex flex-column'>
                <span className='card_prise'>Цена:</span>
                <b className='card__prises'>12 999 руб.</b>
              </div>
          </div>
            <button className='button'>
            <img width={11} height={11} src='./img/buttons/add-button.svg' alt='Plus'/>
          </button>
          </div>
        </div>
      </div>
    </div>
  )
}
