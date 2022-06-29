import React, { useState, useEffect } from 'react';
import './index.css';
import propTypes from 'prop-types';
import {
  getRecipe, addIngredient, removeIngredient } from '../../services/inProgressRecipes';

export default function IngredientArray({ ingredients, buttonState, details }) {
  const recipesInfo = {
    type: details[1] === 'foods' ? 'meals' : 'cocktails',
    id: details[2],
  };

  const [usedIngredients, setUsedIngredients] = useState(getRecipe(recipesInfo));

  useEffect(() => {
    if (usedIngredients.length === ingredients.length) buttonState(false);
  }, [usedIngredients, ingredients, buttonState]);

  const isUsed = (ingredientItem) => usedIngredients
    .some((ingredient) => ingredient === ingredientItem);

  const usedClassName = (ingredientItem) => (isUsed(ingredientItem) ? 'used' : '');

  const handleListItem = (ingredientItem) => {
    if (isUsed(ingredientItem)) {
      setUsedIngredients(usedIngredients
        .filter((ingredient) => ingredient !== ingredientItem));
      removeIngredient({ ...recipesInfo, ingredient: ingredientItem });
      return;
    }
    setUsedIngredients(usedIngredients.concat(ingredientItem));
    addIngredient({ ...recipesInfo, ingredient: ingredientItem });
  };

  return (
    ingredients.map((item, index) => (
      <li
        key={ index }
        data-testid={ `${index}-ingredient-step` }
        className={ usedClassName(item) }
      >
        <input
          type="checkbox"
          onChange={ () => handleListItem(item) }
          checked={ isUsed(item) }
        />
        {item}
      </li>
    ))
  );
}

IngredientArray.propTypes = {
  ingredients: propTypes.arrayOf(propTypes.string).isRequired,
  buttonState: propTypes.func.isRequired,
};
