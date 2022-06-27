import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ListRecipies from '../../components/ListRecipies';

function MainScreen() {
  return (
    <div className="foods-container">
      <Header buttonSearch />
      <ListRecipies />
      <Footer />
    </div>
  );
}

export default MainScreen;
