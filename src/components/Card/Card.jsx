import React from 'react'
import './Card.css'

export default function Card({ imageUrl, title, price, onPlus, onFavorite }) {
  const [isAdded , setIsAdded] = React.useState(false);
  const [isFollow, setIsFollow] = React.useState(false)

  const handleClickPlus = () => {
    onPlus({ imageUrl, title, price })
    setIsAdded(!isAdded);
  }

  const handleFollowButton = () => {
    onFavorite({ imageUrl, title, price })
    setIsFollow(!isFollow);
  }

  return (
      <div className='card__favorite'>
        <div className='card__favorites'>
          <img onClick={handleFollowButton} src={isFollow ? '/img/buttons/foloww-button.svg' : '/img/heard-unliked.svg'} alt='unliked'/>
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
