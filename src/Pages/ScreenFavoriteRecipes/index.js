import React, { useEffect, useState } from 'react';
import Header from '../../components/Header';
import DoneAndFavorite from '../../components/DoneAndFavorite';
import { getLocalStorage } from '../../services/LocalStorage';
// import FavoritesCard from '../../components/FavoritesCard';

import './index.css';
import atentionIcon from '../../images/atencao.svg';

function ScreenFavoriteRecipes() {
  const [haveFavotire, setHaveFavorite] = useState(false);
  useEffect(() => {
    const favoriteStorage = async () => {
      const favoriteCheck = await getLocalStorage('favoriteRecipes');
      if (favoriteCheck) { setHaveFavorite(true); }
    };
    favoriteStorage();
  }, []);
  return (
    <div className="favorites-container">
      <Header />
      {haveFavotire ? (<DoneAndFavorite />
      ) : (
        <div className="favorites-not-found-container">
          <div className="favorites-not-found">
            <img src={ atentionIcon } alt="AtençãoIcon" />
            <h3>Você ainda não possui cards como favoritos.</h3>
          </div>
        </div>)}
    </div>
  );
}

export default ScreenFavoriteRecipes;
