import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

import './index.css';

import drinkIcon from '../../images/explore-drink-icon.svg';
import foodIcon from '../../images/explore-food-icon.svg';

function MainScreenExplore() {
  return (
    <div className="main-explorer-container">
      <Header />
      <div className="main-explorer-content">
        <div className="card-explorer-food">
          <strong>Explore Foods</strong>
          <img src={ foodIcon } alt="IconDrink" />
        </div>
        <div className="card-explorer-drink">
          <strong>Explore Drink</strong>
          <img src={ drinkIcon } alt="IconFood" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default MainScreenExplore;
