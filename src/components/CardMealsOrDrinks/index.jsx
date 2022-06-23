import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import apiFilter from '../../services/apiFilter';
import { actionFilteredData, actionMealOrDrink } from '../../redux/slices/filterSlice';

const MAX_LENGTH = 12;

function CardMealsOrDrinks() {
  const reduxFilters = useSelector(({ filters }) => filters);
  const dispatch = useDispatch();

  const { textFilter, mealOrDrink, radioFilter, filteredData: data } = reduxFilters;

  useEffect(() => {
    const fetchApi = async () => {
      const apiData = await apiFilter(mealOrDrink, radioFilter, textFilter);
      dispatch(actionFilteredData(apiData));
    };

    fetchApi();
  }, [dispatch, mealOrDrink, radioFilter, textFilter]);

  const { location: { pathname } } = useHistory();
  const URLName = pathname.split('/')[1];

  useEffect(() => {
    if (URLName === 'foods') {
      dispatch(actionMealOrDrink('meal'));
    }
    if (URLName === 'drinks') {
      dispatch(actionMealOrDrink('drink'));
    }
  }, [dispatch, URLName]);

  return (
    <div>
      {URLName === 'foods'
        ? data.meals?.slice(0, MAX_LENGTH).map((item, index) => (
          <li key={ index } className="foods-list-item">
            <img src={ item.strMealThumb } alt="FoodsImage" />
            <strong>{item.strMeal}</strong>
            <div className="foods-info">
              <span>{item.strCategory}</span>
              <span className="coutry">{item.strArea}</span>
            </div>
          </li>
        ))
        : data.drinks?.slice(0, MAX_LENGTH).map((item, index) => (
          <li key={ index } className="foods-list-item">
            <img src={ item.strDrinkThumb } alt="FoodsImage" />
            <strong>{item.strDrink}</strong>
            <div className="foods-info">
              <span>{item.strCategory}</span>
            </div>
          </li>
        ))}
    </div>
  );
}

export default CardMealsOrDrinks;
