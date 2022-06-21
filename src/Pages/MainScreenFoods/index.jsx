import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

import './index.css';

const name = 'Chelsea Buns';

function MainScreenFoods() {
  return (
    <div className="main-foods-container">
      <Header pageTittle="Foods" buttonSearch />
      <div className="main-foods-content">
        <div className="filters-button">
          <button type="button" className="btn-filter">All</button>
          <button type="button" className="btn-filter">Beef</button>
          <button type="button" className="btn-filter">Lamb</button>
          <button type="button" className="btn-filter">Chicken</button>
          <button type="button" className="btn-filter">Breakfast</button>
          <button type="button" className="btn-filter">Dessert</button>
        </div>
        <ul className="foods-list">
          <li className="foods-list-item">
            <img
              src="https://media-cdn.tripadvisor.com/media/photo-s/10/84/21/e8/the-chelsea-bun.jpg"
              alt="FoodsImage"
            />
            <strong>{ name }</strong>
          </li>

          <li className="foods-list-item">
            <img
              src="https://media-cdn.tripadvisor.com/media/photo-s/10/84/21/e8/the-chelsea-bun.jpg"
              alt="FoodsImage"
            />
            <strong>{ name }</strong>
          </li>
        </ul>
        <Footer />
      </div>
    </div>
  );
}

export default MainScreenFoods;
