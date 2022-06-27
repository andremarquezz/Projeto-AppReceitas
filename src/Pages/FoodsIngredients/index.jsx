import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

import './index.css';

function FoodsIngredients() {
  return (
    <div>
      <Header />
      <div className="foods-ingredients-title">
        <strong>Ingredients</strong>
      </div>
      <ul className="foods-ingredients-list">
        <li className="ingrediets-item">
          <img src="https://th.bing.com/th/id/R.27f60f48eb45e7db1fc34f99ce0cb582?rik=e4NuEByc9KgVhg&pid=ImgRaw&r=0" alt="IngredientImage" />
          <strong>Sugar</strong>
        </li>

        <li className="ingrediets-item">
          <img src="https://th.bing.com/th/id/R.27f60f48eb45e7db1fc34f99ce0cb582?rik=e4NuEByc9KgVhg&pid=ImgRaw&r=0" alt="IngredientImage" />
          <strong>Sugar</strong>
        </li>

        <li className="ingrediets-item">
          <img src="https://th.bing.com/th/id/R.27f60f48eb45e7db1fc34f99ce0cb582?rik=e4NuEByc9KgVhg&pid=ImgRaw&r=0" alt="IngredientImage" />
          <strong>Sugar</strong>
        </li>

        <li className="ingrediets-item">
          <img src="https://th.bing.com/th/id/R.27f60f48eb45e7db1fc34f99ce0cb582?rik=e4NuEByc9KgVhg&pid=ImgRaw&r=0" alt="IngredientImage" />
          <strong>Sugar</strong>
        </li>
      </ul>
      <Footer />
    </div>
  );
}

export default FoodsIngredients;
