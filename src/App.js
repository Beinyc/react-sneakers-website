//Компоненты
import Card from './components/Card/Card'
import Header from './components/Header/Header'
import Overlay from './components/Overlay/Overlay';
import Main from './components/Main/Main';

function App() {
  return (
    <div className="wrapper clear">
      <Header/>
      <Overlay/>
      <Main/>
      <div className='card-flex'>
        <Card/>
        <Card/>
      </div>    
    </div>
  );
}

export default App;
