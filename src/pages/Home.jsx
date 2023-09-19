import React from 'react';
import Card from '../components/Card';

function Home({
  items,
  searchValue,
  setSearchValue,
  onChangeSearchInput,
  onAddToFavorite,
  onAddToCart,
  isLoading,
}) {
  const renderItems = () => {
    const filtredItems = items.filter((item) =>
      item.title.toLowerCase().includes(searchValue.toLowerCase())
    );

    return (isLoading ? [...Array(9)] : filtredItems).map((item, index) => (
      <Card
        key={index}
        // id={item.id}
        // title={item.title}
        // price={item.price}
        // imagesUrl={item.imagesUrl}
        // added={cartItems.some((obj) => Number(obj.id) === Number(item.id))}
        onClickAdd={(obj) => onAddToCart(obj)}
        onClickFav={(obj) => onAddToFavorite(obj)}
        // added={isItemAdded(item && item.id)}
        loading={isLoading}
        {...item}
      />
    ));
  };
  return (
    <div className="content">
      <div className="content-item">
        <h1 className="content-title">
          {searchValue ? `Поиск по запросу: "${searchValue}"` : 'Все кроссовки'}
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

      <div className="sneakers">{renderItems()}</div>
    </div>
  );
}

export default Home;
