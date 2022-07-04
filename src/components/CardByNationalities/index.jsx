import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import './index.css';

function CardByNationalities() {
  const data = useSelector(({ filters }) => filters.dataNationalities);
  const MAX_LENGTH = 12;

  return (
    data.meals
    && data.meals.slice(0, MAX_LENGTH).map((item, index) => (
      <Link to={ `/foods/${item.idMeal}` } key={ index }>
        <li className="card-list-item" data-testid={ `${index}-recipe-card` }>
          <img
            src={ item.strMealThumb }
            alt="FoodsImage"
            data-testid={ `${index}-card-img` }
          />
          <strong data-testid={ `${index}-card-name` }>{item.strMeal}</strong>
        </li>
      </Link>
    ))
  );
}

export default CardByNationalities;
