import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import List from '../../components/ListRecipies';

function MainScreenDrinks() {
  return (
    <div className="drinks-container">
      <Header pageTittle="Drinks" buttonSearch />
      <List />
      <Footer />
    </div>
  );
}

export default MainScreenDrinks;
