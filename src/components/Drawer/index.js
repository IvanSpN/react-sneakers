import React from 'react';
import axios from 'axios';

import Info from '../Info';
import { useCart } from '../../hooks/useCart';

import styles from './Drawer.module.scss';

function Drawer({ onClose, onRemove, items = [], opened }) {
  const { cartItems, setCartItems, totalPrice } = useCart();
  // const { cartItems, setCartItems } = React.useContext(AppContext);
  const [orderId, setOrderId] = React.useState(null);
  const [isOrderComplete, setIsOrderComplete] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);

  const onClickOrder = async () => {
    try {
      setIsLoading(true);
      const { data } = await axios.post('http://localhost:8000/orders', {
        items: cartItems,
      });
      cartItems.forEach((item) => {
        axios.delete('http://localhost:8000/cart/' + item.id);
      });

      setOrderId(data.id);
      setIsOrderComplete(true);
      setCartItems([]);

      // cartItems.forEach((item) => {
      //   axios.delete('http://localhost:8000/cart/' + item.id);
      // });
    } catch (error) {
      alert('Не удалось создать заказ');
    }
    setIsLoading(false);
  };

  return (
    <div className={`${styles.overlay} ${opened ? styles.overlayVisible : ''}`}>
      <div className={styles.drawer}>
        <h2>
          Корзина
          <img
            onClick={onClose}
            className="cartItem-btn-remove"
            src="/img/sneakers/btn-remove.svg"
            alt="Remove"
          />
        </h2>
        {items.length > 0 ? (
          <div className="drawer-items">
            <div className="items">
              {items.map((obj) => (
                <div key={obj.id} className="cartItem">
                  <div
                    className="cartItemImg"
                    style={{ backgroundImage: `url(${obj.imagesUrl})` }}
                  >
                    {/* <img src="public/img/sneakers/5.jpg" alt="" /> */}
                  </div>
                  <div className="cartItem-item">
                    <p>{obj.title}</p>
                    <b>{obj.price}</b>
                  </div>
                  <img
                    onClick={() => onRemove(obj.id)}
                    className="cartItem-btn-remove"
                    src="/img/sneakers/btn-remove.svg"
                    alt="Remove"
                  />
                </div>
              ))}
            </div>
            <div className="cartTotalBlock">
              <ul className="menuTotalBlock">
                <li className="menuTotalBlockItem">
                  <span>Итого:</span>
                  <div></div>
                  <b>{totalPrice} руб.</b>
                </li>
                <li className="menuTotalBlockItem">
                  <span>Налог 5%:</span>
                  <div></div>
                  <b>{(totalPrice / 100) * 5} руб.</b>
                </li>
              </ul>
              <button
                disabled={isLoading}
                onClick={onClickOrder}
                className="greenButton"
              >
                Оформить заказ <img src="/img/sneakers/arrow.svg" alt="arrow" />
              </button>
            </div>
          </div>
        ) : (
          <Info
            title={isOrderComplete ? 'Заказ оформлен' : 'Корзина пустая'}
            description={
              isOrderComplete
                ? `'Ваш заказ #${orderId} скоро будет передан курьерской доставке'`
                : 'Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.'
            }
            image={
              isOrderComplete ? '/img/complete_order.jpg' : '/img/cartEmpty.jpg'
            }
          />
        )}
      </div>
    </div>
  );
}

export default Drawer;
