import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import List from '../../components/ListRecipies';

function MainScreenFoods() {
  return (
    <div className="foods-container">
      <Header pageTittle="Foods" buttonSearch />
      <List />
      <Footer />
    </div>
  );
}

export default MainScreenFoods;
