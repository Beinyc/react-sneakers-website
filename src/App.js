//Компоненты
import Card from './components/Card/Card'
import Header from './components/Header/Header'
import Overlay from './components/Overlay/Overlay';
import Main from './components/Main/Main';

const sneakers = [
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 12999,
    imageUrl: '/img/sneakers/sneakers 1.jpg',
  },
  {
    title: 'Мужские Кроссовки Nike Air Max 270',
    price: 12999,
    imageUrl: '/img/sneakers/sneakers 2.jpg',
  },
  {
    title: 'Мужские Кроссовки Nike Blazer Mid Suede',
    price: 8499,
    imageUrl: '/img/sneakers/sneakers 3.jpg',
  },
  {
    title: 'Кроссовки Puma X Aka Boku Future Rider',
    price: 8999,
    imageUrl: '/img/sneakers/sneakers 4.jpg',
  },
]

function App() {
  return (
    <div className="wrapper clear">
      <Header/>
      <Overlay/>
      <Main/>
      <div className='card-flex'>
        {
          sneakers.map((obj) => (
            <Card title={obj.title} price={obj.price} imageUrl={obj.imageUrl} />
          ))
        }
      </div>    
    </div>
  );
}

export default App;
