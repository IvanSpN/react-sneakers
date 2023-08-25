import React from 'react';
import styles from './Card.module.scss';

function Card({ title, price, imagesUrl, onClickFav, onClickAdd }) {
  const [addPl, setAddPl] = React.useState(false);
  const [isFavorite, setIsFavorite] = React.useState(false);

  const onClickPLus = () => {
    onClickAdd({ title, price, imagesUrl });
    setAddPl(!addPl);
  };

  const onClickLiked = () => {
    setIsFavorite(!isFavorite);
  };

  // console.log(obj);

  return (
    <div className={styles.card}>
      <div className={styles.cardFavorite}>
        <img
          src={
            isFavorite
              ? '/img/heart-liked-icon.svg'
              : '/img/heart-unliked-icon.svg'
          }
          alt="unliked"
          onClick={onClickLiked}
        />
      </div>
      <img
        onClick={onClickLiked}
        src={imagesUrl}
        alt="sneakers"
        width={133}
        height={112}
      />
      <h5 className={styles.cardTitle}>{title}</h5>
      <div className={styles.cardBottom}>
        <div className={styles.cardBottomItem}>
          <span className={styles.cardSpan}>Цена:</span>
          <b className={styles.cardB}>{price}</b>
        </div>
        <img
          className={styles.plus}
          onClick={onClickPLus}
          src={addPl ? '/img/btn-checked-icon.svg' : '/img/btn-plus-icon.svg'}
          alt="plus"
        />
      </div>
    </div>
  );
}

export default Card;
