import React from 'react'
import './Overlay.css'

import btndelete from '../../images/корзина.svg'

export default function Overlay(props) {
  return (
    <div className='overlay'>
       <div className='overlay__drawer'>
        <div className='overlay__wraper'>
          <h2 className='draver__title'>Корзина</h2>
          <img onClick={props.onClose} className='delteBtn' src={btndelete} alt='delete-button'/>
        </div>
        <div className='overlay__cart-btn'>
        <div className='overlay__cart-item'>
          <img className='overlay__image' src='./img/sneakers/sneakers 1.jpg' width={70} height={70}/>
            <div className='overlay__zone'>
              <p className='overlay__zone-text'>Мужские Кроссовки Nike Blazer Mid Suede</p>
              <b className='overlay__price'>12 999 руб.</b>
            </div>
              <img className='delteBtn' src={btndelete} alt='delete-button'/>
        </div>
        <div className='overlay__cart-item'>
          <img className='overlay__image' src='./img/sneakers/sneakers 1.jpg' width={70} height={70}/>
            <div className='overlay__zone'>
              <p className='overlay__zone-text'>Мужские Кроссовки Nike Blazer Mid Suede</p>
              <b className='overlay__price'>12 999 руб.</b>
            </div>
              <img className='delteBtn' src={btndelete} alt='delete-button'/>
        </div>
        </div>
        <ul className='overlay__total-block'>
            <li className='overlay__total-list'>
              <span>Итого</span>
              <div className='overlay__total-image'></div>
              <b>21 498 руб. </b>
            </li>
            <li className='overlay__total-list'>
              <span>Итого</span>
              <div className='overlay__total-image'></div>
              <b>21 498 руб. </b>
            </li>
          </ul>
          <button className='cartButton'>Оформить заказ</button>
       </div>
      </div>
  )
}
