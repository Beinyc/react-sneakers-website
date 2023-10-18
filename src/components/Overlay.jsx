import React from 'react'

import btndelete from '../images/корзина.svg'

export default function Overlay() {
  return (
    <div style={{display: 'none'}} className='overlay'>
       <div className='drawer d-flex flex-column'>
        <div className='overlay__wraper'>
          <h2 className='draver__title'>Корзина</h2>
          <img className='delteBtn' src={btndelete} alt='delete-button'/>
        </div>
        <div className='cartItemFlex1'>
        <div className='cartItem d-flex align-center mb-20'>
          <img className='mr-20' src='./img/sneakers/sneakers 1.jpg' width={70} height={70}/>
            <div className='mr-20'>
              <p className='mb-5 overlay__text'>Мужские Кроссовки Nike Blazer Mid Suede</p>
              <b className='overlay__price'>12 999 руб.</b>
            </div>
              <img className='delteBtn' src={btndelete} alt='delete-button'/>
        </div>
        <div className='cartItem d-flex align-center'>
          <img className='mr-20' src='./img/sneakers/sneakers 2.jpg' width={70} height={70}/>
            <div className='mr-20'>
              <p className='mb-5 overlay__text'>Мужские Кроссовки Nike Blazer Mid Suede</p>
              <b className='overlay__price'>12 999 руб.</b>
            </div>
              <img className='delteBtn' src={btndelete} alt='delete-button'/>
        </div>
        </div>
        <ul className='cartTotalBlock'>
            <li className='d-flex cartBottomDash'>
              <span>Итого</span>
              <div className='cartDashImage'></div>
              <b>21 498 руб. </b>
            </li>
            <li className='d-flex cartBottomDash'>
              <span>Налог 5%: </span>
              <div className='cartDashImage'></div>
              <b>1074 руб. </b>
            </li>
          </ul>
          <button className='cartButton'>Оформить заказ</button>
       </div>
      </div>
  )
}
