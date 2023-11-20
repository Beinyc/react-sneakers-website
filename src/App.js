import React from 'react';

//Компоненты
import Card from './components/Card/Card'
import Header from './components/Header/Header'
import Overlay from './components/Overlay/Overlay';
import Main from './components/Main/Main';
import { useState, useEffect } from 'react';



function App() {
  
  const [cardOpened, setCardOpened] = useState(false)
  const [items, setItems] = useState([])

 React.useEffect(() => {
  fetch('https://655b4fb0ab37729791a8e51d.mockapi.io/items')
  .then((res) => {
    return res.json();
  })
  .then((json) => {
    setItems(json);
  })
 }, []);

  return (
    <div className="wrapper clear">
      <Header/>
      <Overlay/>
      <Main/>
      <div className='card-flex'>
        {
          items.map((obj) => (
            <Card title={obj.title} price={obj.price} imageUrl={obj.imageUrl} />
          ))
        }
      </div>    
    </div>
  );
}

export default App;
