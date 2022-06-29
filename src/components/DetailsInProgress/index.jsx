import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import apiDetails from '../../services/apiDetails';
import RecomedeCard from '../RecomedeCard';
import shareIcon from '../../images/shareIcon.svg';
import blackHeartIcon from '../../images/blackHeartIcon.svg';
import haertIcon from '../../images/whiteHeartIcon.svg';
import leftIcon from '../../images/left.svg';
import './index.css';
import IngredientArray from '../IngredientArray';
import createDoneRecipe from '../../services/createDoneRecipe';
import { addDoneRecipe } from '../../services/doneRecipes';
import localStorageRecipeVerify from '../../services/localStorageRecipeVerify';
import favoriteStoreControl from '../../services/favoriteStoreControl';

const BUTTON_STATE = {
  state: true,
  text: 'Start Recipe',
  favorite: false,
};

const youtubeVidConfig = (url) => {
  const link = url.split('=')[1];
  return `https://www.youtube.com/embed/${link}`;
};

const copy = require('clipboard-copy');

export default function DetailsInProgress() {
  const [copied, setCopied] = useState(false);
  const [recipeDetails, setRecipeDetails] = useState('');
  const [detailsType, setDetailsType] = useState('');
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [buttonControl, setButtonControl] = useState(BUTTON_STATE);
  const {
    location: { pathname },
    push,
  } = useHistory();
  const split = pathname.split('/');
  useEffect(() => {
    const detailsData = async () => {
      const data = await apiDetails(split[1], split[2]);
      setDetailsType(Object.entries(data)[0][0]);
      setRecipeDetails(data);
    };
    detailsData();
  }, [pathname, split]);
  const location = split[1];
  const id = split[2];

  useEffect(() => {
    const productData = localStorageRecipeVerify(location, id);

    setButtonControl({
      state: productData.recipeDone,
      text: productData.recipeInProgress,
      favorite: productData.recipefavorite,
    });
  }, [id, location]);

  const goToDoneRecipes = () => {
    const recipe = createDoneRecipe(recipeDetails, detailsType, pathname.split('/'));
    addDoneRecipe(recipe);
    push('/done-recipes');
  };

  const copiedOnScreenTimer = () => {
    const TEXT_TIMER = 5000;
    setCopied(true);
    const textTimeout = setTimeout(() => {
      setCopied(false);
      clearTimeout(textTimeout);
    }, TEXT_TIMER);
  };

  const copyToClipboard = () => {
    copy(`http://localhost:3000/${split[1]}/${split[2]}`);
    copiedOnScreenTimer();
  };

  const btnFavorite = () => {
    const button = {
      state: true,
      text: 'Start Recipe',
      favorite: !buttonControl.favorite,
    };
    favoriteStoreControl(recipeDetails, detailsType, id);
    setButtonControl(button);
  };

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
    if (split[1] === 'foods') {
      return push('/foods');
    }
    return push('/drinks');
  };

  return (
    <div className="details-container">
      {detailsType && recipeDetails !== '' && detailsType !== '' && (
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

              <button type="button" onClick={ () => copyToClipboard() }>
                <img src={ shareIcon } alt="IconShare" data-testid="share-btn" />
              </button>
              {copied && <h1>Link copied!</h1>}
              <button type="button" onClick={ () => btnFavorite() }>
                <img
                  src={ buttonControl.favorite ? blackHeartIcon : haertIcon }
                  alt="IconHaert"
                  data-testid="favorite-btn"
                />
              </button>
            </div>
            <strong className="currency" data-testid="recipe-category">
              {detailsType === 'meals'
                ? recipeDetails.meals[0].strCategory
                : recipeDetails.drinks[0].strAlcoholic}
            </strong>
            <div className="card-details-ingredients">
              <h4>Ingredients</h4>
              <ul className="ingredients-list">
                <IngredientArray
                  ingredients={ createIngredientArray(detailsType) }
                  buttonState={ setButtonDisabled }
                  details={ pathname.split('/') }
                />
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
              data-testid="finish-recipe-btn"
              onClick={ () => goToDoneRecipes() }
              disabled={ buttonDisabled }
            >
              Finish Recipe
            </button>
          </div>
        </>
      )}
    </div>
  );
}
