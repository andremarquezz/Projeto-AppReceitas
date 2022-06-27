import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
// import { useSelector } from 'react-redux';
// import { saveLocalStorage } from '../../services/LocalStorage';
import './index.css';

function RecipesInProgress() {
  const [textDecoration, setTextDecoration] = useState(false);
  const dataBase = useSelector(({ filters: { filteredData: data } }) => data);
  const {
    location: { pathname },
  } = useHistory();

  const urlName = pathname.split('/');
  const [ingredients] = useState(
    dataBase[0].filter(
      (key) => key.include('strIngredients') && key !== '' && key !== null,
    ),
  );

  // );

  // const handleRecipesProgress = () => {
  //   const recipe =
  //   saveLocalStorage('inProgressRecipes',);
  // };

  return (
    <div>
      {urlName[1] === 'foods'
        && dataBase
        && dataBase.map((recipe) => (
          <div key={ recipe.idMeal }>
            <img
              data-testid="recipe-photo"
              src={ recipe.strMealThumb }
              alt="Foto da receita pronta"
            />
            <h1 data-testid="recipe-title">{recipe.strMeal}</h1>
            <span data-testid="recipe-category">{recipe.strCategory}</span>
            <button type="button" data-testid="share-btn">
              Share
            </button>
            <button type="button" data-testid="favorite-btn">
              Favorite
            </button>
            <h3>Ingredients</h3>
            <ul>
              {ingredients.map((ingredient, i) => (
                <li key={ i } className={ textDecoration ? 'text-decoration' : '' }>
                  <input
                    data-testid={ `${i}-ingredient-step` }
                    type="checkbox"
                    onClick={ () => setTextDecoration(!textDecoration) }
                  />
                  {ingredient}
                </li>
              ))}
            </ul>
            <div>
              <h3>Instructions</h3>
              <p data-testid="instructions">{recipe.strInstructions}</p>
            </div>
            <button type="button" data-testid="finish-recipe-btn">
              Finish Recipe
            </button>
          </div>
        ))}
      {urlName[1] === 'drinks'
        && dataBase
        && dataBase.map((recipe) => (
          <div key={ recipe.idDrink }>
            <img
              data-testid="recipe-photo"
              src={ recipe.strDrinkThumb }
              alt="Foto da receita pronta"
            />
            <h1 data-testid="recipe-title">{recipe.strDrink}</h1>
            <span data-testid="recipe-category">{recipe.strCategory}</span>
            <button type="button" data-testid="share-btn">
              Share
            </button>
            <button type="button" data-testid="favorite-btn">
              Favorite
            </button>
            <h3>Ingredients</h3>
            <ul>
              {ingredients.map((ingredient) => (
                <li
                  key={ ingredient }
                  className={ textDecoration ? 'text-decoration' : '' }
                >
                  <input
                    data-testid={ `${i}-ingredient-step` }
                    type="checkbox"
                    onClick={ () => setTextDecoration(!textDecoration) }
                  />
                  {ingredient}
                </li>
              ))}
            </ul>
            <div>
              <h3>Instructions</h3>
              <p data-testid="instructions">{recipe.strInstructions}</p>
            </div>
            <button type="button" data-testid="finish-recipe-btn">
              Finish Recipe
            </button>
          </div>
        ))}
    </div>
  );
}

export default RecipesInProgress;
