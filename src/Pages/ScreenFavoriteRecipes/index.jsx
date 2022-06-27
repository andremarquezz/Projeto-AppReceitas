import React from 'react';
import Header from '../../components/Header';
// import FavoritesCard from '../../components/FavoritesCard';

import './index.css';
import atentionIcon from '../../images/atencao.svg';
// const array = ['a', 'b', 'j', 'd', 'u'];

function ScreenFavoriteRecipes() {
  return (
    <div className="favorites-container">
      <Header />
      <div className="favorits-description-filter">
        <strong>Filtros</strong>
      </div>
      <div className="filters-favorites">
        <button type="button">All</button>
        <button type="button">Foods</button>
        <button type="button">Drinks</button>
      </div>
      <div className="favorits-description-items">
        <strong>Meus favoritos</strong>
      </div>
      {/* <ul className="favorites-list">
        {array.map((item, index) => (
          <FavoritesCard key={ index } />
        ))}
      </ul> */}

      <div className="favorites-not-found-container">
        <div className="favorites-not-found">
          <img src={ atentionIcon } alt="AtençãoIcon" />
          <h3>Você ainda não possi cards como favoritos.</h3>
        </div>
      </div>
    </div>
  );
}

export default ScreenFavoriteRecipes;
