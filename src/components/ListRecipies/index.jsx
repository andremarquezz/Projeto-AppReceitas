import React from 'react';
import { useSelector } from 'react-redux';
import CardMealsOrDrinks from '../CardMealsOrDrinks';

import './index.css';

function ListRecipies() {
  const categorys = useSelector(({ filters }) => filters.categorys);

  return (
    <div className="main-foods-container">
      <div className="main-foods-content">
        <div className="description-filters">
          <strong>Filtros</strong>
        </div>
        <div className="filters-button">
          <button type="button" className="btn-filter">
            All
          </button>
          {categorys.map((category, i) => (
            <button type="button" className="btn-filter" key={ i }>
              {category}
            </button>
          ))}
        </div>
        <div className="description-list">
          <strong>Principais receitas</strong>
        </div>
        <CardMealsOrDrinks />
      </div>
    </div>
  );
}

export default ListRecipies;
