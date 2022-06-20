import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './Footer.css';
import drinks from '../../images/drinkIcon.svg';
import explore from '../../images/exploreIcon.svg';
import food from '../../images/mealIcon.svg';

export default function Footer() {
  const { push } = useHistory();

  return (
    <div
      data-testid="footer"
      className={ styles.footer }
    >
      <button
        data-testid="drinks-bottom-btn"
        type="button"
        onClick={ () => push('/drinks') }
      >
        <img src={ drinks } alt="drinksIcon" />
      </button>
      <button
        data-testid="explore-bottom-btn"
        type="button"
        onClick={ () => push('/explore') }
      >
        <img src={ explore } alt="drinksIcon" />
      </button>
      <button
        data-testid="food-bottom-btn"
        type="button"
        onClick={ () => push('/foods') }
      >
        <img src={ food } alt="drinksIcon" />
      </button>
    </div>
  );
}
