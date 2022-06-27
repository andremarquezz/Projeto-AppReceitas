import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import apiFilter from '../../services/apiFilter';

//  FIZ DE FORMA DIFERENTE NESSE CARD PARA FINS DE TESTE =D
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
  console.log(recommendedRecipes);

  return (
    <div className="recommended-container">
      <div className="recommended-contente">
        {recommendedRecipes
        && recommendedRecipes.map((item, index) => (
          <div
            className="card carousel"
            key={ item + index }
            data-testid={ `${index}-recomendation-card` }
          >
            <img
              src={ item[`str${recipeKey}Thumb`] }
              alt={ `screen of ${item[`str${recipeKey}`]}` }
            />

            <h4 data-testid={ `${index}-recomendation-title` }>
              { item[`str${recipeKey}`] }
            </h4>
          </div>
        ))}
      </div>

    </div>
  );
}

CardRecommendedRecipes.propTypes = {
  filter: PropTypes.string.isRequired,
};
