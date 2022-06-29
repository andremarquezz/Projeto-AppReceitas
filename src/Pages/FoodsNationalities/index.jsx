import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

import './index.css';

function FoodsNationalities() {
  // data-testid="${nacionalidade}-option"
  return (
    <div className="foods-nationalit-container">
      <Header buttonSearch />
      <div className="foods-nationalit-content">
        <strong>Filter</strong>
        <select data-testid="explore-by-nationality-dropdown">
          <option>Canada</option>
        </select>
      </div>
      <div className="cards-nationality-list">
        <div className="card-item">
          <img src="https://www.themealdb.com/images/media/meals/n3xxd91598732796.jpg" alt="ImageItem" />
          <srong>hrhrrh</srong>
        </div>
        <div className="card-item">
          <img src="https://www.themealdb.com/images/media/meals/n3xxd91598732796.jpg" alt="ImageItem" />
          <srong>hrhrrh</srong>
        </div>
        <div className="card-item">
          <img src="https://www.themealdb.com/images/media/meals/n3xxd91598732796.jpg" alt="ImageItem" />
          <srong>hrhrrh</srong>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default FoodsNationalities;
