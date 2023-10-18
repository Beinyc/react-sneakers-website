import React from 'react'

import logo from '../images/image 4.svg'
import cart from '../images/cart.svg'
import users from '../images/users.svg'
import folow from '../images/folow.svg'

export default function Header() {
  return (
    <header className='d-flex justify-between align-center p-40'>
        <div className="d-flex align-center">
          <img className='mr-15' src={logo} />
          <div className="header__info">
            <h3 className='mb-0 text-uppercase'>React Sneakers</h3>
            <p className='mb-0'>Магазин лучших кроссовок</p>
          </div>
        </div>
        <div className="header__right">
        <ul className='d-flex'>
          <li className='mr-30'><img src={cart} className='mr-10' /><span>1205 руб.</span></li>
          <li className='mr-30'><img src={folow} className='mr-10'/>Закладки</li>
          <li><img src={users} className='mr-10'/>Профиль</li>
        </ul>
        </div>
      </header>
  )
}
