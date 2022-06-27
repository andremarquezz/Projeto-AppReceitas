import React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import drinks from '../../images/drinkIcon.svg';
import explore from '../../images/exploreIcon.svg';
import food from '../../images/mealIcon.svg';
import { actionCardCategories } from '../../redux/slices/filterSlice';

import './index.css';

export default function Footer() {
  const { push } = useHistory();
  const dispatch = useDispatch();

  return (
    <div data-testid="footer" className="footer-container">
      <div className="footer-content">
        <button
          type="button"
          onClick={ () => {
            dispatch(actionCardCategories(false));
            push('/drinks');
          } }
        >
          <img data-testid="drinks-bottom-btn" src={ drinks } alt="drinksIcon" />
        </button>
        <button
          type="button"
          onClick={ () => {
            dispatch(actionCardCategories(false));
            push('/explore');
          } }
        >
          <img data-testid="explore-bottom-btn" src={ explore } alt="drinksIcon" />
        </button>
        <button
          type="button"
          onClick={ () => {
            dispatch(actionCardCategories(false));
            push('/foods');
          } }
        >
          <img data-testid="food-bottom-btn" src={ food } alt="drinksIcon" />
        </button>
      </div>
    </div>
  );
}
