import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import './index.css';
import ingredientsIcon from '../../images/ingredientes.svg';
import surpraseIcon from '../../images/surprase.svg';
import nationalitIcon from '../../images/nationalit.svg';

function FoodsScreenExplore() {
  const { push } = useHistory();

  return (
    <div className="foods-explorer-container">
      <Header />
      <div className="btn-explorer">
        <button
          type="button"
          data-testid="explore-by-ingredient"
          onClick={ () => push('/explore/foods/ingredients') }
        >
          By Ingredient
          <img src={ ingredientsIcon } alt="IconIngrediets" />
        </button>
        <button
          type="button"
          data-testid="explore-by-nationality"
          onClick={ () => push('/explore/foods/nationalities') }
        >
          By Nationality
          <img src={ nationalitIcon } alt="nationalitIcon" />
        </button>
        <button
          type="button"
          data-testid="explore-surprise"
        >
          Surprise me!
          <img src={ surpraseIcon } alt="surpraseIcon" />
        </button>
      </div>
      <Footer />
    </div>
  );
}

export default FoodsScreenExplore;
