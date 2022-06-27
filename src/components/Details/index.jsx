import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import apiDetails from '../../services/apiDetails';
import CardRecommendedRecipes from '../CardRecommendedRecipes';
import { getLocalStorage } from '../../services/LocalStorage';

const youtubeVidConfig = (url) => {
  const link = url.split('=')[1];
  return `https://www.youtube.com/embed/${link}`;
};

export default function Details() {
  const [recipeDetails, setRecipeDetails] = useState([]);
  const { location: { pathname } } = useHistory();

  const pathnameSplited = () => {
    const split = pathname.split('/');
    return {
      location: split[1],
      id: split[2],
    };
  };

  useEffect(() => {
    const detailsData = async () => {
      const localData = pathnameSplited();
      const data = await apiDetails(localData.location, localData.id);
      setRecipeDetails(data);
    };
    detailsData();
  }, [pathname]);

  //  ===> APAGAR ISSO <===
  if (recipeDetails.meals) { console.log(recipeDetails.meals[0]); }

  const createIngredientArray = (type) => {
    const detailsObj = recipeDetails[type][0];
    const objKays = Object.keys(detailsObj);
    const ingredients = objKays.filter((objKey) => objKey.includes('Ingredient'));
    const measures = objKays.filter((objKey) => objKey.includes('Measure'));

    return (
      ingredients.map((ingredientList, index) => (
        detailsObj[ingredientList]
          ? `${detailsObj[ingredientList]} - ${detailsObj[measures[index]]}`
          : false
      ))
    );
  };

  const checkMyRecipes = () => {
    const recipeId = pathnameSplited();
    const recipeNotMade = getLocalStorage(recipeId.id);
    if (recipeNotMade === null) { return true; }
    return false;
  };

  const { meals, drinks } = recipeDetails;
  return (
    <div className="details-container">
      <div className="details-contente">
        {recipeDetails
        && meals
        && (
          <>
            <img
              src={ meals[0].strMealThumb }
              alt="meal photograph"
              data-testid="recipe-photo"
            />
            <h3 data-testid="recipe-title">{ meals[0].strMeal }</h3>

            <button
              type="button"
              data-testid="share-btn"
            >
              compartilhar
            </button>

            <button
              type="button"
              data-testid="favorite-btn"
            >
              favoritar
            </button>

            <p data-testid="recipe-category">{ meals[0].strCategory }</p>
            { createIngredientArray('meals').map((item, index) => (
              <p
                key={ index }
                data-testid={ `${index}-ingredient-name-and-measure` }
              >
                { item }
              </p>)) }

            <h3>Intructions</h3>
            <p data-testid="instructions">{ meals[0].strInstructions }</p>

            <h3>Video</h3>
            <iframe
              width="320"
              height="240"
              src={ youtubeVidConfig(meals[0].strYoutube) }
              title="recipe movie"
              data-testid="video"
              frameBorder="0"
              allowFullScreen
            />

            <CardRecommendedRecipes filter="drinks" />

          </>
        )}

        {recipeDetails
        && drinks
        && (
          <>
            <img
              src={ drinks[0].strDrinkThumb }
              alt="meal photograph"
              data-testid="recipe-photo"
            />
            <h3 data-testid="recipe-title">{ drinks[0].strDrink }</h3>
            <p data-testid="recipe-category">{ drinks[0].strAlcoholic }</p>

            <button
              type="button"
              data-testid="share-btn"
            >
              compartilhar
            </button>

            <button
              type="button"
              data-testid="favorite-btn"
            >
              favoritar
            </button>

            <p>{ drinks[0].strCategory }</p>
            { createIngredientArray('drinks').map((item, idx) => (
              <p
                key={ idx }
                data-testid={ `${idx}-ingredient-name-and-measure` }
              >
                { item }
              </p>)) }

            <h3>Intructions</h3>
            <p data-testid="instructions">{ drinks[0].strInstructions }</p>

            <CardRecommendedRecipes filter="meals" />
          </>
        )}
        {checkMyRecipes()
        && <button type="button" data-testid="start-recipe-btn">Start Recipe</button>}

      </div>
    </div>
  );
}
