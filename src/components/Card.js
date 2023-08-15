function Card() {
  return (
    <div className="card">
      <div className="card-favorite">
        <img src="/img/heart-unliked-icon.svg" alt="unliked" />
      </div>
      <img src="/img/sneakers/1.jpg" alt="sneakers" width={133} height={112} />
      <h5 className="card-title">Мужские Кроссовки Nike Blazer Mid Suede</h5>
      <div className="card-bottom">
        <div className="card-bottom-item">
          <span className="card-span">Цена:</span>
          <b className="card-b">12 999 руб.</b>
        </div>
        <button className="card-button">
          <img src="/img/plus-card.svg" alt="plus" width={11} height={11} />
        </button>
      </div>
    </div>
  );
}

export default Card;
