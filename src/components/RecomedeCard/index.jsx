import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import apiFilter from '../../services/apiFilter';

import './index.css';

export default function CardRecommendedRecipes({ filter }) {
  const [recommendedRecipes, setRecommendedRecipes] = useState([]);
  const [recipeKey, setRecipeKey] = useState('');

  useEffect(() => {
    if (filter === 'drinks') { setRecipeKey('Drink'); }
    if (filter === 'meals') { setRecipeKey('Meal'); }
  }, [filter]);

  useEffect(() => {
    const CARD_LENGTH = 6;
    const cardItens = async () => {
      await apiFilter(filter, 'name', '').then((items) => {
        const setItems = items[filter].slice(0, CARD_LENGTH);
        setRecommendedRecipes(setItems);
      });
    };
    cardItens();
  }, [filter]);

  return (
    <>
      {recommendedRecipes.map((item, index) => (
        <li
          key={ index }
          className="card-recomeded"
          data-testid={ `${index}-recomendation-card` }
        >
          <img
            src={ item[`str${recipeKey}Thumb`] }
            alt={ `screen of ${item[`str${recipeKey}`]}` }
          />
          <div className="card-recomeded-info">

            <span className="recomended-type">
              { (
                (filter === 'meals') ? item.strCategory : item.strAlcoholic)}
            </span>
            <strong
              className="recomended-title"
              data-testid={ `${index}-recomendation-title` }
            >
              { item[`str${recipeKey}`] }
            </strong>
          </div>
        </li>
      ))}
    </>
  );
}

CardRecommendedRecipes.propTypes = {
  filter: PropTypes.string.isRequired,
};
