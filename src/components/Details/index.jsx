import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import apiDetails from '../../services/apiDetails';
import RecomedeCard from '../RecomedeCard';
import shareIcon from '../../images/shareIcon.svg';
import haertIcon from '../../images/blackHeartIcon.svg';
import leftIcon from '../../images/left.svg';
import './index.css';

const youtubeVidConfig = (url) => {
  const link = url.split('=')[1];
  return `https://www.youtube.com/embed/${link}`;
};

export default function Details() {
  const [recipeDetails, setRecipeDetails] = useState('');
  const [detailsType, setDetailsType] = useState('');
  const [loading, setLoading] = useState(true);

  const {
    location: { pathname },
    push,
  } = useHistory();

  useEffect(() => {
    const split = pathname.split('/');
    const detailsData = async () => {
      const data = await apiDetails(split[1], split[2]);

      setDetailsType(Object.entries(data)[0][0]);
      setRecipeDetails(data);
    };
    detailsData();
  }, [pathname]);

  useEffect(() => {
    if (detailsType !== '') {
      return setLoading(false);
    }
    return setLoading(true);
  }, [detailsType]);

  const createIngredientArray = (type) => {
    const detailsObj = recipeDetails[type][0];
    const objKays = Object.keys(detailsObj);
    const ingredients = objKays.filter((objKey) => objKey.includes('Ingredient'));
    const measures = objKays.filter((objKey) => objKey.includes('Measure'));

    const newIngredients = ingredients
      .map((ingredientList, index) => (detailsObj[ingredientList]
        ? `${detailsObj[ingredientList]} - ${detailsObj[measures[index]]}`
        : false));

    const ingredientsItem = newIngredients.filter((item) => item !== false);

    return ingredientsItem;
  };

  const handleComeBack = () => {
    const split = pathname.split('/');
    if (split[1] === 'foods') {
      return push('/foods');
    }
    return push('/drinks');
  };

  return (
    <div className="details-container">
      {!loading && (
        <>
          <div className="card-details-header">
            <img
              src={
                detailsType === 'meals'
                  ? recipeDetails.meals[0].strMealThumb
                  : recipeDetails.drinks[0].strDrinkThumb
              }
              alt="Icon"
              className="image-recipes"
              data-testid="recipe-photo"
            />
            <button type="button" onClick={ () => handleComeBack() }>
              <img src={ leftIcon } alt="LeftIcon" />
            </button>
          </div>
          <div className="card-details-body">
            <div className="title-header">
              <h1 data-testid="recipe-title">
                {detailsType === 'meals'
                  ? recipeDetails.meals[0].strMeal
                  : recipeDetails.drinks[0].strDrink}
              </h1>
              <div className="icons-action">
                <img src={ shareIcon } alt="IconShare" data-testid="share-btn" />
                <img src={ haertIcon } alt="IconHaert" data-testid="favorite-btn" />
              </div>
            </div>
            <strong className="currency" data-testid="recipe-category">
              {detailsType === 'meals'
                ? recipeDetails.meals[0].strCategory
                : recipeDetails.drinks[0].strAlcoholic}
            </strong>
            <div className="card-details-ingredients">
              <h4>Ingredients</h4>
              <ul className="ingredients-list">
                {createIngredientArray(detailsType).map((item, index) => (
                  <li
                    key={ index }
                    data-testid={ `${index}-ingredient-name-and-measure` }
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            <div className="card-details-instructions">
              <h4>Instructions</h4>
              <p data-testid="instructions">
                {detailsType === 'meals'
                  ? recipeDetails.meals[0].strInstructions
                  : recipeDetails.drinks[0].strInstructions}
              </p>
            </div>
            {detailsType !== 'drinks' && (
              <div className="embed">
                <h4>Video</h4>
                <div className="embed-video">
                  <iframe
                    data-testid="video"
                    width="100%"
                    height="100%"
                    src={ youtubeVidConfig(recipeDetails.meals[0].strYoutube) }
                    title="Turkish Vegetable Lentil Soup Recipe"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media;"
                    allowFullScreen
                  />
                </div>
              </div>
            )}

            <div className="cards-recomended">
              <h4>Remended</h4>
              <ul className="cards-remended-list">
                <RecomedeCard filter={ detailsType === 'meals' ? 'drinks' : 'meals' } />
              </ul>
            </div>

            <button
              type="button"
              className="btn-start-recipies"
              data-testid="start-recipe-btn"
              onClick={ () => push(`/${split[1]}/${split[2]}/in-progress`) }
            >
              Start Recipies
            </button>
          </div>
        </>
      )}
    </div>
  );
}
