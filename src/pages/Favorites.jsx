import React from 'react';
import Card from '../components/Card';
import AppContext from '../context';
function Favorites({ onAddToFavorite }) {
  const { favorites } = React.useContext(AppContext);
  return (
    <div className="content">
      <div className="content-item">
        <h1 className="content-title">Мои закладки</h1>
      </div>

      <div className="sneakers">
        {favorites.map((item, index) => (
          <Card
            key={index}
            // id={item.id}
            // title={item.title}
            // price={item.price}
            // imagesUrl={item.imagesUrl}
            {...item}
            favorited={true}
            // onClickAdd={(obj) => onAddToCart(obj)}
            onClickFav={onAddToFavorite}
          />
        ))}
      </div>
    </div>
  );
}

export default Favorites;
