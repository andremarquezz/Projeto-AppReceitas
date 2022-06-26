import React from 'react';
import { useHistory } from 'react-router-dom';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import './index.css';
import ingredientsIcon from '../../images/ingredientes.svg';
import surpraseIcon from '../../images/surprase.svg';

function DrinksScreenExplore() {
  const { push } = useHistory();

  return (
    <div className="drinks-explorer-container">
      <Header />
      <div className="btn-explorer">
        <button
          type="button"
          data-testid="explore-by-ingredient"
          onClick={ () => push('/explore/drinks/ingredients') }
        >
          By Ingredient
          <img src={ ingredientsIcon } alt="IconIngrediets" />
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

export default DrinksScreenExplore;
