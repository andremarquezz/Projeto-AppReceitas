import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import Header from '../../components/Header';
import shareIcon from '../../images/shareIcon.svg';
import { getDoneRecipes } from '../../services/doneRecipes';

const copy = require('clipboard-copy');

function ScreenDoneRecipes() {
  const NO_COPY = -1;
  const [filter, setFilter] = useState('all');
  const [copied, setCopied] = useState(NO_COPY);

  const getRecipes = getDoneRecipes() || [];

  const doneRecipes = getRecipes.filter(
    (recipe) => filter === 'all' || recipe.type === filter,
  );

  const copiedOnScreenTimer = (id) => {
    const TEXT_TIMER = 5000;
    setCopied(id);
    const textTimeout = setTimeout(() => {
      setCopied(NO_COPY);
      clearTimeout(textTimeout);
    }, TEXT_TIMER);
  };

  const copyToClipboard = (type, id) => {
    copy(`http://localhost:3000/${type}/${id}`);
    copiedOnScreenTimer(id);
  };

  return (
    <div>
      <Header />
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
        <strong>Receitas concluídas</strong>
      </div>
      <div className="card-done-content">
        {doneRecipes.map((recipe, index) => (
          <>
            <div key="index" className="done-recipies-item">
              <div className="done-card-img">
                <Link to={ `/${recipe.type}s/${recipe.id}` }>
                  <img src="https://www.thecocktaildb.com/images/media/drink/2x8thr1504816928.jpg" alt="icon" />
                </Link>
              </div>
              <div className="done-card-body">
                <div className="card-body-header">
                  <p data-testid={ `${index}-horizontal-top-text` }>
                    {recipe.type === 'food'
                      ? `${recipe.nationality} - ${recipe.category}`
                      : recipe.alcoholicOrNot}
                  </p>
                  <strong data-testid="-horizontal-done-date">25/04/22</strong>
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
                    {recipe.tags.map((tag) => (
                      <p key={ tag } data-testid={ `${index}-${tag}-horizontal-tag` }>
                        {tag}
                      </p>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="btn-share">
              {copied === recipe.id && <strong>Link copied!</strong>}
              <button
                type="button"
                className="btn-share"
                onClick={ () => copyToClipboard(`${recipe.type}s`, recipe.id) }
              >
                <img src={ shareIcon } alt="IconShare" />
              </button>
            </div>
          </>
        ))}
      </div>
    </div>
  );
}

export default ScreenDoneRecipes;
