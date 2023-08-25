function Drawer({ onClose, onRemove, items = [] }) {
  return (
    <div class="overlay">
      <div class="drawer">
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
          <div>
            <div class="items">
              {items.map((obj) => (
                <div class="cartItem">
                  <div
                    style={{ backgroundImage: `url(${obj.imagesUrl})` }}
                    class="cartItemImg"
                  ></div>
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
        ) : (
          <div className="cartEmpty">
            <img
              src="/img/cartEmpty.jpg"
              alt="cartEmpty"
              width={120}
              height={120}
            />
            <h2>Корзина пустая</h2>
            <p>Добавьте хотя бы одну пару кроссовок, чтобы сделать заказ.</p>
            <button className="greenButton" onClick={onClose}>
              <img
                className="greenButtonLeft"
                src="/img/arrowLeft.svg"
                alt="arrowLeft"
              />
              Вернуться назад
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Drawer;
