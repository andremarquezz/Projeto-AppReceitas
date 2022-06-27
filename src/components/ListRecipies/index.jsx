import React from 'react';
import CardMealsOrDrinks from '../CardMealsOrDrinks';

import './index.css';

function ListRecipies() {
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
          <button type="button" className="btn-filter">
            Beef
          </button>
          <button type="button" className="btn-filter">
            Lamb
          </button>
          <button type="button" className="btn-filter">
            Chicken
          </button>
          <button type="button" className="btn-filter">
            Breakfast
          </button>
          <button type="button" className="btn-filter">
            Dessert
          </button>
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
