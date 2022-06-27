import React from 'react';
import { useHistory } from 'react-router-dom';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import drinkIcon from '../../images/explore-drink-icon.svg';
import foodIcon from '../../images/explore-food-icon.svg';
import './index.css';

function MainScreenExplore() {
  const { push } = useHistory();

  return (
    <div className="main-explorer-container">
      <Header />
      <div className="main-explorer-content">
        <button
          type="button"
          onClick={ () => push('/explore/foods') }
          className="card-explorer-food"
          data-testid="explore-foods"
        >
          Explore Foods
          <img src={ foodIcon } alt="IconDrink" />
        </button>
        <button
          type="button"
          className="card-explorer-drink"
          onClick={ () => push('/explore/drinks') }
          data-testid="explore-drinks"
        >
          Explore Drinks
          <img src={ drinkIcon } alt="IconFood" />
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default MainScreenExplore;
