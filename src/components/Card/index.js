import React from 'react';
import styles from './Card.module.scss';
import ContentLoader from 'react-content-loader';

import AppContext from '../../context';

function Card({
  title,
  price,
  imagesUrl,
  id,
  onClickFav,
  onClickAdd,
  favorited = false,
  added = false,
  loading = false,
}) {
  const { isItemAdded } = React.useContext(AppContext);
  // const [addPl, setAddPl] = React.useState(added);
  const [isFavorite, setIsFavorite] = React.useState(favorited);

  console.log(title, isItemAdded(id));

  const onClickPLus = () => {
    onClickAdd({ title, price, imagesUrl, id });
    // setAddPl(!addPl);
  };

  const onClickLiked = () => {
    onClickFav({ title, imagesUrl, price, id });
    setIsFavorite(!isFavorite);
    // console.log('like');
  };

  // console.log(obj);

  return (
    <div className={styles.card}>
      {loading ? (
        <ContentLoader
          speed={2}
          width={150}
          height={250}
          viewBox="0 0 150 265"
          backgroundColor="#f3f3f3"
          foregroundColor="#ecebeb"
        >
          <rect x="0" y="0" rx="10" ry="10" width="150" height="90" />
          <rect x="0" y="113" rx="5" ry="5" width="150" height="15" />
          <rect x="0" y="135" rx="5" ry="5" width="100" height="15" />
          <rect x="0" y="190" rx="5" ry="5" width="80" height="25" />
          <rect x="115" y="184" rx="10" ry="10" width="32" height="32" />
        </ContentLoader>
      ) : (
        <>
          <div className={styles.cardFavorite} onClick={onClickLiked}>
            {onClickFav && (
              <img
                src={
                  isFavorite
                    ? '/img/heart-liked-icon.svg'
                    : '/img/heart-unliked-icon.svg'
                }
                alt="unliked"
              />
            )}
          </div>
          <img
            // onClick={onClickLiked}
            src={imagesUrl}
            alt="sneakers"
            width="100%"
            height={135}
          />
          <h5 className={styles.cardTitle}>{title}</h5>
          <div className={styles.cardBottom}>
            <div className={styles.cardBottomItem}>
              <span className={styles.cardSpan}>Цена:</span>
              <b className={styles.cardB}>{price}</b>
            </div>
            {onClickAdd && (
              <img
                className={styles.plus}
                onClick={onClickPLus}
                src={
                  isItemAdded(id)
                    ? '/img/btn-checked-icon.svg'
                    : '/img/btn-plus-icon.svg'
                }
                alt="plus"
              />
            )}
          </div>
        </>
      )}
    </div>
  );
}

export default Card;
