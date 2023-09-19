import React from 'react';
import Card from '../components/Card';
import axios from 'axios';
import AppContext from '../context';

function Orders() {
  const { onAddToCart, onAddToFavorite } = React.useContext(AppContext);
  const [orders, setOrders] = React.useState([]);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    (async () => {
      try {
        const { data } = await axios.get('http://localhost:8000/orders');
        setOrders(data.reduce((prev, obj) => [...prev, ...obj.items], []));
        setIsLoading(false);
      } catch (error) {
        alert('Ошибка при запросе заказов');
        console.error(error);
      }
    })();
  }, []);
  return (
    <div className="content">
      <div className="content-item">
        <h1 className="content-title">Мои заказы</h1>
      </div>

      <div className="sneakers">
        {isLoading
          ? [...Array(9)]
          : orders.map((item, index) => (
              <Card
                key={index}
                // id={item.id}
                // title={item.title}
                // price={item.price}
                // imagesUrl={item.imagesUrl}
                // added={cartItems.some((obj) => Number(obj.id) === Number(item.id))}
                // onClickAdd={(obj) => onAddToCart(obj)}
                // onClickFav={(obj) => onAddToFavorite(obj)}
                // added={isItemAdded(item && item.id)}
                loading={isLoading}
                {...item}
              />
            ))}
      </div>
    </div>
  );
}

export default Orders;
