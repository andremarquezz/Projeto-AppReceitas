import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import {
  actionCardCategories,
  actionCardIngredients,
  actionCategoryFilter,
} from '../../redux/slices/filterSlice';
import fetchCategories from '../../services/apiCategories';
import { categoryFilter } from '../../services/apiFilter';
import CardByCategory from '../CardByCategory';
import CardByIngredients from '../CardByIngredients';
import CardByNationalities from '../CardByNationalities';
import CardMealsOrDrinks from '../CardMealsOrDrinks';

import './index.css';

function ListRecipies() {
  const dispatch = useDispatch();
  const [categories, setCategories] = useState([]);
  const [lastCategory, setlastCategory] = useState('');
  const cardCategories = useSelector(({ filters }) => filters.cardCategories);
  const cardIngredients = useSelector(({ filters }) => filters.cardIngredient);
  const cardNationalities = useSelector(({ filters }) => filters.cardNationalities);
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
    if (lastCategory === category) {
      dispatch(actionCardCategories(false));
      dispatch(actionCardIngredients(false));
      setlastCategory('');
    } else {
      const type = pathname === '/foods' ? 'meals' : 'drinks';
      categoryFilter(category, type)
        .then((response) => dispatch(actionCategoryFilter(response)));
      setlastCategory(category);

      dispatch(actionCardCategories(true));
      dispatch(actionCardIngredients(false));
    }
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
            data-testid="All-category-filter"
            onClick={ () => {
              dispatch(actionCardCategories(false));
              dispatch(actionCardIngredients(false));
            } }
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
        {cardIngredients ? (
          <CardByIngredients />
        ) : (
          <div>
            {cardCategories ? (
              <CardByCategory />
            ) : (
              <div>
                {cardNationalities ? <CardByNationalities /> : <CardMealsOrDrinks />}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default ListRecipies;
