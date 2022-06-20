import React from 'react';
import { useHistory } from 'react-router-dom';
import styles from './Footer.module.css';
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
        type="button"
        onClick={ () => push('/drinks') }
      >
        <img data-testid="drinks-bottom-btn" src={ drinks } alt="drinksIcon" />
      </button>
      <button
        type="button"
        onClick={ () => push('/explore') }
      >
        <img data-testid="explore-bottom-btn" src={ explore } alt="drinksIcon" />
      </button>
      <button
        type="button"
        onClick={ () => push('/foods') }
      >
        <img data-testid="food-bottom-btn" src={ food } alt="drinksIcon" />
      </button>
    </div>
  );
}
