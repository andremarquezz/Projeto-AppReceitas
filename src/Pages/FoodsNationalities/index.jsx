import React, { useEffect, useState } from 'react';
import CardMealsOrDrinks from '../../components/CardMealsOrDrinks';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import fetchNationalities from '../../services/apiNationalities';

import './index.css';

function FoodsNationalities() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetch = async () => {
      const { meals } = await fetchNationalities();
      setData(meals);
    };
    fetch();
  }, []);

  return (
    <div className="foods-nationalit-container">
      {data.length > 0 && (
        <>
          <Header buttonSearch />
          <div className="foods-nationalit-content">
            <strong>Filter</strong>
            <select data-testid="explore-by-nationality-dropdown">
              {data.map(({ strArea }, i) => (
                <option data-testid={ `${strArea}-option` } key={ i }>
                  {strArea}
                </option>
              ))}
            </select>
          </div>
          <div className="cards-nationality-list">
            <CardMealsOrDrinks />
            <div className="card-item">
              <img
                src="https://www.themealdb.com/images/media/meals/n3xxd91598732796.jpg"
                alt="ImageItem"
              />
              <strong>hrhrrh</strong>
            </div>
          </div>
          <Footer />
        </>
      )}
    </div>
  );
}

export default FoodsNationalities;
