import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import CardByNationalities from '../../components/CardByNationalities';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { actionDataNationalities } from '../../redux/slices/filterSlice';
import { nameNationalities, foodNationalities } from '../../services/apiNationalities';
import './index.css';

const API = 'https://www.themealdb.com/api/json/v1/1/search.php?s=';
const MAX_LENGTH = 12;
const MAX_LENGTH_CATEGORY = 10;

function FoodsNationalities() {
  const dispatch = useDispatch();
  const [nationalities, setNationalities] = useState([]);
  const [data, setData] = useState([]);
  const [byNationality, setByNationality] = useState(false);

  useEffect(() => {
    const fetchNameNationalities = async () => {
      const { meals } = await nameNationalities();
      setNationalities(meals);
    };
    fetchNameNationalities();
    const fetchFoodsAll = async () => {
      const newData = await (await fetch(API)).json();
      setData(newData);
    };
    fetchFoodsAll();
  }, []);

  const fetchFoodsNationalities = async (value) => {
    if (value === 'All') {
      return setByNationality(false);
    }
    const newData = await foodNationalities(value);
    dispatch(actionDataNationalities(newData));
    setByNationality(true);
  };

  return (
    <div className="foods-nationalit-container">
      {nationalities.length > 0 && (
        <>
          <Header buttonSearch />
          <div className="foods-nationalit-content">
            <strong>Filter</strong>
            <select
              data-testid="explore-by-nationality-dropdown"
              onChange={ ({ target }) => fetchFoodsNationalities(target.value) }
            >
              <option data-testid="All-option">All</option>
              {nationalities.map(({ strArea }, i) => (
                <option data-testid={ `${strArea}-option` } key={ i }>
                  {strArea}
                </option>
              ))}
            </select>
          </div>
          <div className="cards-nationality-list">
            <ul className="card-list">
              {byNationality ? (
                <CardByNationalities />
              ) : (
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
                      <div className="card-item-info">
                        <span>{item.strCategory.substr(0, MAX_LENGTH_CATEGORY)}</span>
                        <span className="coutry">{item.strArea}</span>
                      </div>
                    </li>
                  </Link>
                ))
              )}
            </ul>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}

export default FoodsNationalities;
