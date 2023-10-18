import logo from './images/image 4.svg'
import cart from './images/cart.svg'
import users from './images/users.svg'
import folow from './images/folow.svg'

import search from './images/search.svg'
import btndelete from './images/корзина.svg'

//Компоненты
import Card from './components/Card'

function App() {
  return (
    <div className="wrapper clear">

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
      <div className='search mb-40 d-flex justify-between align-center'>
          <h1>Все кроссовки</h1>
          <div className='d-flex align-center header__search-input'>
            <img src={search} alt='search'className='header__search-image'/>
            <input className='header__input' placeholder='Поиск...'></input>
          </div>
      </div>
      <div className="content p-40">

      <div className='d-flex'>
        <Card/>
      </div>
        
      </div>
    </div>
  );
}

export default App;
