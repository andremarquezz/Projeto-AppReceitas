import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import List from '../../components/ListRecipies';

function MainScreen() {
  return (
    <div className="foods-container">
      <Header buttonSearch />
      <List />
      <Footer />
    </div>
  );
}

export default MainScreen;
