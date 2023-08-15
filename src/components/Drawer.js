function Drawer() {
  return (
    <div style={{ display: 'none' }} class="overlay">
      <div class="drawer">
        <h2>
          Корзина{' '}
          <img
            className="cartItem-btn-remove"
            src="/img/sneakers/btn-remove.svg"
            alt="Remove"
          />
        </h2>

        <div class="items">
          <div class="cartItem">
            <div
              style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }}
              class="cartItemImg"
            ></div>
            <div className="cartItem-item">
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img
              className="cartItem-btn-remove"
              src="/img/sneakers/btn-remove.svg"
              alt="Remove"
            />
          </div>
          <div class="cartItem">
            <div
              style={{ backgroundImage: 'url(/img/sneakers/1.jpg)' }}
              class="cartItemImg"
            ></div>
            <div className="cartItem-item">
              <p>Мужские Кроссовки Nike Air Max 270</p>
              <b>12 999 руб.</b>
            </div>
            <img
              className="cartItem-btn-remove"
              src="/img/sneakers/btn-remove.svg"
              alt="Remove"
            />
          </div>
        </div>
        <div class="cartTotalBlock">
          <ul className="menuTotalBlock">
            <li className="menuTotalBlockItem">
              <span>Итого:</span>
              <div></div>
              <b>21 487 руб.</b>
            </li>
            <li className="menuTotalBlockItem">
              <span>Налог 5%:</span>
              <div></div>
              <b>1074 руб.</b>
            </li>
          </ul>
          <button className="greenButton">
            Оформить заказ <img src="/img/sneakers/arrow.svg" alt="arrow" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Drawer;
