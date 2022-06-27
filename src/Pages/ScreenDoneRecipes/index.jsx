import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './index.css';
import Header from '../../components/Header';
import shareIcon from '../../images/shareIcon.svg';

const copy = require('clipboard-copy');

function ScreenDoneRecipes() {
  const [filter, setFilter] = useState('all');
  const doneRecipes = [
    {
      id: '52771',
      type: 'food',
      nationality: 'Italian',
      category: 'Vegetarian',
      alcoholicOrNot: '',
      name: 'Spicy Arrabiata Penne',
      image: 'https://www.themealdb.com/images/media/meals/ustsqw1468250014.jpg',
      doneDate: '23/06/2020',
      tags: ['Pasta', 'Curry'],
    },
    {
      id: '178319',
      type: 'drink',
      nationality: '',
      category: 'Cocktail',
      alcoholicOrNot: 'Alcoholic',
      name: 'Aquamarine',
      image: 'https://www.thecocktaildb.com/images/media/drink/zvsre31572902738.jpg',
      doneDate: '23/06/2020',
      tags: [],
    },
  ].filter((recipe) => (filter === 'all' || recipe.type === filter));

  const copyToClipboard = (type, id) => {
    copy(`http://localhost:3000/${type}/${id}`);
    global.alert('Link copied!');
  };

  return (
    <div>
      <Header />
      <div>
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
          Food
        </button>
        <button
          type="button"
          data-testid="filter-by-drink-btn"
          onClick={ () => setFilter('drink') }
        >
          Drinks
        </button>
      </div>
      <div>
        {
          doneRecipes.map((recipe, index) => (
            <div
              key="index"
            >
              <Link to={ `/${recipe.type}s/${recipe.id}` }>
                <img
                  src={ recipe.image }
                  alt={ recipe.name }
                  data-testid={ `${index}-horizontal-image` }
                  className="recipe-img"
                />
              </Link>
              <p data-testid={ `${index}-horizontal-top-text` }>
                {
                  recipe.type === 'food'
                    ? `${recipe.nationality} - ${recipe.category}`
                    : recipe.alcoholicOrNot
                }
              </p>
              <Link to={ `/${recipe.type}s/${recipe.id}` }>
                <p data-testid={ `${index}-horizontal-name` }>{ recipe.name }</p>
              </Link>
              <p data-testid={ `${index}-horizontal-done-date` }>{ recipe.doneDate }</p>
              <button
                type="button"
                onClick={ () => copyToClipboard(`${recipe.type}s`, recipe.id) }
              >
                <img
                  data-testid={ `${index}-horizontal-share-btn` }
                  src={ shareIcon }
                  alt="shareicon"
                />
              </button>
              {
                recipe.tags.map((tag) => (
                  <p
                    key={ tag }
                    data-testid={ `${index}-${tag}-horizontal-tag` }
                  >
                    {tag}
                  </p>
                ))
              }
            </div>
          ))
        }
      </div>
    </div>
  );
}

export default ScreenDoneRecipes;
