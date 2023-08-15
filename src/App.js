import './App.css';
import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';

function App() {
  return (
    <div className="wrapper">
      <Drawer />
      <Header />
      <div className="content">
        <div className="content-item">
          <h1 className="content-title">Все кроссовки</h1>
          <div className="search-block">
            <img src="/img/search-icon.svg" alt="icon search" />
            <input className="search-input" placeholder="Поиск ... " />
          </div>
        </div>

        <div className="sneakers">
          <Card />
          <Card />
          <Card />
          <Card />
        </div>
      </div>
    </div>
  );
}

export default App;
