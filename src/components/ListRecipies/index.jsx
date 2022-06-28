import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {
  actionCardCategories,
  actionCategoryFilter,
} from '../../redux/slices/filterSlice';
import fetchCategories from '../../services/apiCategories';
import { categoryFilter } from '../../services/apiFilter';
import CardByCategory from '../CardByCategory';
import CardMealsOrDrinks from '../CardMealsOrDrinks';

import './index.css';

function ListRecipies() {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  const cardCategories = useSelector(({ filters }) => filters.cardCategories);
  const { pathname } = useLocation();
  const maxCategory = 5;

  useEffect(() => {
    const key = pathname === '/foods' ? 'meals' : 'drinks';
    const dataCategories = async () => {
      fetchCategories(pathname).then((response) => setCategories(response[key]));
    };
    dataCategories();
  }, [pathname]);

  const btnFilterCategory = (category) => {
    const type = pathname === '/foods' ? 'meals' : 'drinks';
    categoryFilter(category, type)
      .then((response) => dispatch(actionCategoryFilter(response)));
    dispatch(actionCardCategories(true));
  };

  return (
    <div className="main-foods-container">
      <div className="main-foods-content">
        <div className="description-filters">
          <strong>Filtros</strong>
        </div>
        <div className="filters-button">
          <button
            type="button"
            className="btn-filter"
            onClick={ () => dispatch(actionCardCategories(false)) }
          >
            All
          </button>
          {categories.slice(0, maxCategory).map(({ strCategory }) => (
            <button
              type="button"
              className="btn-filter"
              key={ strCategory }
              data-testid={ `${strCategory}-category-filter` }
              onClick={ () => btnFilterCategory(strCategory) }
            >
              {strCategory}
            </button>
          ))}
        </div>
        <div className="description-list">
          <strong>Principais receitas</strong>
        </div>
        {cardCategories ? <CardByCategory /> : <CardMealsOrDrinks />}
      </div>
    </div>
  );
}

export default ListRecipies;
