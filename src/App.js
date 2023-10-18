//Компоненты
import Card from './components/Card'
import Header from './components/Header'
import Overlay from './components/Overlay';
import Main from './components/Main';

function App() {
  return (
    <div className="wrapper clear">
      <Header/>
      <Overlay/>
      <Main/>
      <Card/>
    </div>
  );
}

export default App;
