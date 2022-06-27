import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';

import './index.css';

function FoodsNationalities() {
  // data-testid="${nacionalidade}-option"
  return (
    <div className="foods-nationalit-container">
      <Header />
      <div className="foods-nationalit-content">
        <strong>Filter</strong>
        <select data-testid="explore-by-nationality-dropdown">
          <option>
            Canada
          </option>
        </select>
      </div>
      <Footer />
    </div>
  );
}

export default FoodsNationalities;
