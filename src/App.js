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
      <Card/>
      <Card/>
    </div>
  );
}

export default App;
