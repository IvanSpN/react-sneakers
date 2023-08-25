import React from 'react';
import axios from 'axios';
import './App.css';
import Card from './components/Card';
import Drawer from './components/Drawer';
import Header from './components/Header';

function App() {
  const [items, setItems] = React.useState([]);
  const [cartItems, setCartItems] = React.useState([]);
  const [favorites, setFavorites] = React.useState([]);
  const [searchValue, setSearchValue] = React.useState('');
  const [cartOpened, setCartOpened] = React.useState(false);
  React.useEffect(() => {
    axios.get('http://localhost:8000/items').then((res) => {
      setItems(res.data);
    });
    axios.get('http://localhost:8000/cart').then((res) => {
      setCartItems(res.data);
    });
  }, []);

  const onAddToCart = (obj) => {
    axios.post('http://localhost:8000/cart', obj);

    setCartItems((prev) => [...prev, obj]);
  };

  const onRemoveItem = (id) => {
    axios.delete(`http://localhost:8000/cart/${id}`);
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const onChangeSearchInput = (event) => {
    setSearchValue(event.target.value);
  };

  // console.log(cartItems);
  return (
    <div className="wrapper">
      {cartOpened ? (
        <Drawer
          items={cartItems}
          onClose={() => setCartOpened(false)}
          onRemove={onRemoveItem}
        />
      ) : null}
      <Header onClickCart={() => setCartOpened(true)} />
      <div className="content">
        <div className="content-item">
          <h1 className="content-title">
            {searchValue
              ? `Поиск по запросу: "${searchValue}"`
              : 'Все кроссовки'}
          </h1>
          <div className="search-block">
            {searchValue && (
              <img
                onClick={() => setSearchValue('')}
                className="clear"
                src="/img/sneakers/btn-remove.svg"
                alt="clear"
              />
            )}
            <img src="/img/search-icon.svg" alt="icon search" />
            <input
              value={searchValue}
              onChange={onChangeSearchInput}
              className="search-input"
              placeholder="Поиск ... "
            />
          </div>
        </div>

        <div className="sneakers">
          {items
            .filter((item) => item.title.toLowerCase().includes(searchValue))
            .map((item, id) => (
              <Card
                key={id}
                title={item.title}
                price={item.price}
                imagesUrl={item.imagesUrl}
                onClickAdd={onAddToCart}
                onClickFav={() => console.log('Клик на сердечко')}
              />
            ))}
        </div>
      </div>
    </div>
  );
}

export default App;
