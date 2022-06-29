import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom';
import apiFilter from '../../services/apiFilter';
import { actionFilteredData, actionMealOrDrink } from '../../redux/slices/filterSlice';
import './index.css';

const MAX_LENGTH = 12;
const MAX_LENGTH_CATEGORY = 10;

function CardMealsOrDrinks() {
  const reduxFilters = useSelector(({ filters }) => filters);
  const dispatch = useDispatch();

  const {
    textFilter,
    mealOrDrink,
    radioFilter,
    filteredData: data,
    dataIngredient,
  } = reduxFilters;

  useEffect(() => {
    const fetchApi = async () => {
      if (dataIngredient) return;
      const apiData = await apiFilter(mealOrDrink, radioFilter, textFilter);
      dispatch(actionFilteredData(apiData));
    };

    fetchApi();
  }, [dispatch, mealOrDrink, radioFilter, textFilter, dataIngredient]);

  const {
    location: { pathname },
    push,
  } = useHistory();

  const URLName = pathname.split('/')[1];

  useEffect(() => {
    if (URLName === 'foods') {
      dispatch(actionMealOrDrink('meals'));
    }
    if (URLName === 'drinks') {
      dispatch(actionMealOrDrink('drinks'));
    }
  }, [dispatch, URLName]);

  useEffect(() => {
    if (data.drinks || data.meals) {
      const position = Object.keys(data)[0];
      const id = Object.values(data[position][0])[0];
      if (data[position].length === 1) {
        return push(`/${URLName}/${id}`);
      }
    }
    if (Array.isArray(data) && data.length === 0) {
      global.alert('Sorry, we haven\'t found any recipes for these filters.');
    }
  }, [data, push, URLName, dispatch]);

  return (
    <ul className="card-list">
      {URLName === 'foods'
        && data.meals
        && data.meals.slice(0, MAX_LENGTH).map((item, index) => (
          <Link to={ `/${URLName}/${item.idMeal}` } key={ index }>
            <li className="card-list-item" data-testid={ `${index}-recipe-card` }>
              <img
                src={ item.strMealThumb }
                alt="FoodsImage"
                data-testid={ `${index}-card-img` }
              />
              <strong data-testid={ `${index}-card-name` }>{item.strMeal}</strong>
              <div className="card-item-info">
                <span>{item.strCategory.substr(0, MAX_LENGTH_CATEGORY)}</span>
                <span className="coutry">{item.strArea}</span>
              </div>
            </li>
          </Link>
        ))}

      {URLName === 'drinks'
        && data.drinks
        && data.drinks.slice(0, MAX_LENGTH).map((item, index) => (
          <Link to={ `/${URLName}/${item.idDrink}` } key={ index }>
            <li className="card-list-item" data-testid={ `${index}-recipe-card` }>
              <img
                src={ item.strDrinkThumb }
                alt="FoodsImage"
                data-testid={ `${index}-card-img` }
              />
              <strong data-testid={ `${index}-card-name` }>{item.strDrink}</strong>
              <div className="card-item-info">
                <span>{item.strCategory}</span>
              </div>
            </li>
          </Link>
        ))}
    </ul>
  );
}

export default CardMealsOrDrinks;
