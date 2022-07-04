import React, { useEffect, useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import './index.css';
import shareIcon from '../../images/shareIcon.svg';
import blackHeart from '../../images/blackHeartIcon.svg';
import { getDoneRecipes } from '../../services/doneRecipes';
import { getLocalStorage } from '../../services/LocalStorage';
import { deleteFavoriteRecipe } from '../../services/favoriteStoreControl';

const copy = require('clipboard-copy');

const NO_COPY = -1;
const checkLocation = (path) => path.split('/')[1];

const favoritePage = 'favorite-recipes';

export default function DoneAndFavorite() {
  const [filter, setFilter] = useState('all');
  const [copied, setCopied] = useState(NO_COPY);
  const [displayMessage, setDisplayMessage] = useState('');
  const [myRecipes, setMyRecipes] = useState([]);
  const [reload, setReload] = useState(false);

  const { location: { pathname } } = useHistory();
  const myLocation = checkLocation(pathname);

  useEffect(() => {
    const recipeStorage = myLocation === favoritePage
      ? getLocalStorage('favoriteRecipes') : getDoneRecipes();
    if (recipeStorage) {
      const recipeFiltered = recipeStorage.filter(
        (recipe) => filter === 'all' || recipe.type === filter,
      );
      setMyRecipes(recipeFiltered);
    }
    setReload(false);
  }, [myLocation, filter, reload]);

  const copiedOnScreenTimer = (id) => {
    const TEXT_TIMER = 5000;
    setCopied(id);
    const textTimeout = setTimeout(() => {
      setCopied(NO_COPY);
      clearTimeout(textTimeout);
    }, TEXT_TIMER);
  };

  useEffect(() => {
    if (myLocation === favoritePage) { setDisplayMessage('Receitas Favoritas'); }
    if (myLocation === 'done-recipes') { setDisplayMessage('Receitas Concluídas'); }
  }, [myLocation]);

  const copyToClipboard = (type, id) => {
    copy(`http://localhost:3000/${type}/${id}`);
    copiedOnScreenTimer(id);
  };

  const favoriteRemove = (id) => {
    deleteFavoriteRecipe(id);
    setReload(true);
  };

  // ====//====RETURN====//====//
  return (
    <div>
      <div className="done-description-filter">
        <strong>Filtros</strong>
      </div>
      <div className="filters-done">
        <button
          type="button"
          data-testid="filter-by-all-btn"
          onClick={ () => setFilter('all') }
        >
          All
        </button>
        <button
          type="button"
          data-testid="filter-by-food-btn"
          onClick={ () => setFilter('food') }
        >
          Foods
        </button>
        <button
          type="button"
          data-testid="filter-by-drink-btn"
          onClick={ () => setFilter('drink') }
        >
          Drinks
        </button>
      </div>
      <div className="done-description-items">
        <strong>{ displayMessage }</strong>
      </div>
      <div className="card-done-content">
        {myRecipes.map((recipe, index) => (
          <>
            <div key={ recipe.id } className="done-recipies-item">
              <div className="done-card-img">
                <Link to={ `/${recipe.type}s/${recipe.id}` }>
                  <img
                    src={ recipe.image }
                    alt="icon"
                    data-testid={ `${index}-horizontal-image` }
                  />
                </Link>
              </div>
              <div className="done-card-body">
                <div className="card-body-header">
                  <p data-testid={ `${index}-horizontal-top-text` }>
                    {recipe.type === 'food'
                      ? `${recipe.nationality} - ${recipe.category}`
                      : recipe.alcoholicOrNot}
                  </p>
                  {recipe.doneDate
                    && (
                      <strong data-testid={ `${index}-horizontal-done-date` }>
                        { recipe.doneDate }
                      </strong>)}
                </div>
                <Link to={ `/${recipe.type}s/${recipe.id}` }>
                  <p
                    data-testid={ `${index}-horizontal-name` }
                    className="horizontal-name"
                  >
                    {recipe.name}
                  </p>
                </Link>
                <div className="done-action">
                  <div className="tags">
                    {recipe.tags && recipe.tags.map((tag, i) => (
                      <p
                        key={ recipe.id + tag + i }
                        data-testid={ `${index}-${tag}-horizontal-tag` }
                      >
                        {tag}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="btn-share">
              {copied === recipe.id && <strong>Link copied!</strong>}
              <input
                type="image"
                className="btn-share"
                onClick={ () => copyToClipboard(`${recipe.type}s`, recipe.id) }
                data-testid={ `${index}-horizontal-share-btn` }
                src={ shareIcon }
                alt="IconShare"
              />
              {myLocation === favoritePage
              && (
                <input
                  type="image"
                  className="btn-share"
                  onClick={ () => favoriteRemove(recipe.id) }
                  data-testid={ `${index}-horizontal-favorite-btn` }
                  src={ blackHeart }
                  alt="IconHeart"
                />
              )}
            </div>
          </>
        ))}
      </div>
    </div>
  );
}
