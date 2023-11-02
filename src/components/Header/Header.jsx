import React from 'react'
import './Header.css'

import logo from '../../images/image 4.svg'
import cart from '../../images/cart.svg'
import users from '../../images/users.svg'
import folow from '../../images/folow.svg'

export default function Header() {
  return (
    <header className='header__box'>
        <div className="header__title">
          <img className='header__logo' src={logo} />
          <div className="header__info">
            <h3 className='header__paragraph'>React Sneakers</h3>
            <p className='header__paragraph-title'>Магазин лучших кроссовок</p>
          </div>
        </div>
        <div className="header__right">
        <ul className='header__right-info'>
          <li className='header__right-ptice'><img src={cart} className='header__right-image' /><span>1205 руб.</span></li>
          <li className='header__right-ptice'><img src={folow} className='header__right-image'/>Закладки</li>
          <li><img src={users} className='header__right-image'/>Профиль</li>
        </ul>
        </div>
      </header>
  )
}
