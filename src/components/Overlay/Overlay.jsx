import React from 'react'
import './Overlay.css'

import btndelete from '../../images/корзина.svg'

export default function Overlay({ onClose, onRemove ,items=[] }) {
  return (
    <div className='overlay'>
       <div className='overlay__drawer'>
        <div className='overlay__wraper'>
          <div className='overlay__wraper-top'>
            <h2 className='draver__title'>Корзина</h2>
            <img onClick={onClose} className='delteBtn' src={btndelete} alt='delete-button'/>
          </div>

          {
            items.length > 0 ? (
            <div>
              <div className='overlay__cart-btn'>
            {
              items.map((obj) => (
                <div className='overlay__cart-item'>
                <div className='overlay__image' style={{backgroundImage: `url(${obj.imageUrl})`}}></div>
              {/* <img className='overlay__image' src='./img/sneakers/sneakers 1.jpg'  width={70} height={70}/> */}
              <div className='overlay__zone'>
                <p className='overlay__zone-text'>{obj.title}</p>
                <b className='overlay__price'>{obj.price}руб.</b>
              </div>
                <img onClick={()=> onRemove(obj.id)}  className='delteBtn' src={btndelete} alt='delete-button'/>
          </div>
              ))
            }
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
          ) : (<div className='cartEmpty'>
            <img width='120px' height='120px' src='/img/empty-cart.jpg' alt='картинка корзина пуста'/>
            <h2 className='drawer__empty-tittle'>Корзина пустая</h2>
            <p className='drawer__empty-paragraph'>Добавьте хотя бы одну пару кроссовок, что бы сделать заказ.</p>
            <button className='greenButton' onClick={onClose}>
              <img className='drawer__empty-tittle_button' src='/img/buttons/arrow.svg' alt='Arrow'/>
               Вернуться назад
            </button>
          </div>)
          }
          
          </div>
       </div>
      </div>
  )
}
