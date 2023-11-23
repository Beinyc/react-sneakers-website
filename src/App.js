import React from 'react';

//Компоненты
import Card from './components/Card/Card'
import Header from './components/Header/Header'
import Overlay from './components/Overlay/Overlay';
import Main from './components/Main/Main';
import { useState, useEffect } from 'react';



function App() {
  
  const [ items, setItems ] = useState([])
  const [ cartItems, setCartItems ] = useState([])
  const [ cartOpened, setCartOpened ] = useState(false)
  
  React.useEffect(() => {
  fetch('https://655b4fb0ab37729791a8e51d.mockapi.io/items')
  .then((res) => {
    return res.json();
  })
  .then((json) => {
    setItems(json);
  })
 }, []);

 const onAddToCart = (obj) => {
  setCartItems([... cartItems, obj]);
 }

  return (
    <div className="wrapper clear">
      {cartOpened && <Overlay items={cartItems} onClose={() => setCartOpened(false)}/>}
      <Header onClickCart={() => setCartOpened(true)}/>
      <Main/>
      <div className='card-flex'>
        {
          items.map((obj) => (
            <Card 
              title={obj.title} 
              price={obj.price} 
              imageUrl={obj.imageUrl} 
              onPlus={(obj) => onAddToCart(obj)}
            />
          ))
        }
      </div>    
    </div>
  );
}

export default App;
