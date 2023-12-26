import React from 'react';
import axios from 'axios';

//Компоненты
import Card from './components/Card/Card'
import Header from './components/Header/Header'
import Overlay from './components/Overlay/Overlay';
import Main from './components/Main/Main';
import { useState, useEffect } from 'react';



function App() {
  
  const [ items, setItems ] = useState([])
  const [ cartItems, setCartItems ] = useState([])
  const [ favorites, setFavorites ] = useState([])
  const [ searchValue, setSearchValue ] = useState('')
  const [ cartOpened, setCartOpened ] = useState(false)
  
  React.useEffect(() => {
  axios.get('https://655b4fb0ab37729791a8e51d.mockapi.io/items').then(res =>{
    setItems(res.data)
  });
  axios.get('https://655b4fb0ab37729791a8e51d.mockapi.io/cart').then(res =>{
    setCartItems(res.data)
  });
 }, []);

 const onAddToCart = (obj) => {
  axios.post('https://655b4fb0ab37729791a8e51d.mockapi.io/cart', obj)
  setCartItems([... cartItems, obj]);
 }

 const onRemoveItem = ( id ) => {
  axios.delete(`https://655b4fb0ab37729791a8e51d.mockapi.io/cart/${id}`)
  setCartItems((cartItems) => cartItems.filter(item => item.id !== id));
 }

 const onAddToFavorite = (obj) => {
  axios.post('https://6589c859324d417152597bf1.mockapi.io/favorites', obj)
  setFavorites([... cartItems, obj]);
 }

 const onCgangeSearchInput = (event) => {
  setSearchValue(event.target.value)
 }

  return (
    <div className="wrapper clear">
      {cartOpened && <Overlay items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem}/>}
      <Header onClickCart={() => setCartOpened(true)}/>
      <Main onCgangeSearchInput={onCgangeSearchInput} searchValue={searchValue}/>
      <div className='card-flex'>
        {
          items
          .filter((item) => item.title.toLowerCase().includes(searchValue.toLowerCase()))
          .map((obj, index) => (
            <Card
              key={index} 
              title={obj.title} 
              price={obj.price} 
              imageUrl={obj.imageUrl}
              onFavorite={(obj) => onAddToFavorite(obj)}
              onPlus={(obj) => onAddToCart(obj)}
            />
          ))
        }
      </div>    
    </div>
  );
}

export default App;
