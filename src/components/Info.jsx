import React from 'react';
import AppContext from '../context';

const Info = ({ image, title, description }) => {
  const { setCartOpened } = React.useContext(AppContext);
  return (
    <div className="cartEmpty">
      <img src={image} alt="cartEmpty" width={120} height={120} />
      <h2>{title}</h2>
      <p>{description}</p>
      <button className="greenButton" onClick={() => setCartOpened(false)}>
        <img
          className="greenButtonLeft"
          src="/img/arrowLeft.svg"
          alt="arrowLeft"
        />
        Вернуться назад
      </button>
    </div>
  );
};

export default Info;
