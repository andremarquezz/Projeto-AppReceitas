import React from 'react';

import './index.css';
import shareIcon from '../../images/shareIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';

function FavoritesCard() {
  return (
    <li className="favorites-item">
      <img
        src="https://www.themealdb.com/images/media/meals/tkxquw1628771028.jpg"
        alt="FavoritesImage"
      />
      <div className="favorites-card-body">
        <div className="favorites-card-info">
          <p>Cale</p>
          <strong>Melão com açucahd</strong>
        </div>
        <div className="favorites-card-actons">
          <img
            src={ shareIcon }
            alt="IconShare"
          />
          <img
            src={ blackHeartIcon }
            alt="BlackHeartIcon"
          />
        </div>
      </div>
    </li>
  );
}

export default FavoritesCard;
