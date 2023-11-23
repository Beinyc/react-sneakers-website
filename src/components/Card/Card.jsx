import React from 'react'
import './Card.css'

export default function Card({ imageUrl, title, price, onPlus }) {
  const [isAdded , setIsAdded] = React.useState(false);

  const handleClickPlus = () => {
    onPlus({ imageUrl, title, price })
    setIsAdded(!isAdded);
  }

  return (
      <div className='card__favorite'>
        <div className='card__favorites'>
          <img src='/img/heard-unliked.svg' alt='unliked'/>
        </div>
          <img width={133} height={112} src={imageUrl} alt='кроссовки'/>
          <h5 className='card__title'>{title}</h5>
          <div className='card__button'>
          <div className='card__full-price'>
              <div className='card__total-price'>
                <span className='card_prise'>Цена:</span>
                <b className='card__prises'>{price} руб.</b>
              </div>
          </div>
            <button className='button'>
            <img onClick={handleClickPlus} src={isAdded ? '/img/buttons/plus.svg' : '/img/buttons/add-button.svg'} alt='Plus'/>
          </button>
          </div>
        </div>
  )
}
