import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import apiFilter from '../../services/apiFilter';
import Footer from '../../components/Footer';
import Header from '../../components/Header';

import './index.css';

const MAX_LIST_INGREDIENTS = 12;

function FoodsIngredients() {
  const [ingredientsList, setIngredientsList] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (ingredientsList.length !== 0) return setLoading(false);
    return setLoading(true);
  }, [ingredientsList]);

  useEffect(() => {
    const getByIngredients = async () => {
      const response = await apiFilter('meals', 'ingredient', '');
      const ingredients = response.meals.slice(0, MAX_LIST_INGREDIENTS);
      return setIngredientsList(ingredients);
    };

    getByIngredients();
  }, []);

  console.log(ingredientsList);

  return (
    <div>
      <Header />
      <div className="foods-ingredients-title">
        <strong>Ingredients</strong>
      </div>
      {(!loading) && (
        <ul className="foods-ingredients-list">
          { ingredientsList.map((ingredient, index) => (
            <Link
              key={ index }
              to="/foods"
            >
              <li
                className="ingrediets-item"
                data-testid={ `${index}-ingredient-card` }
              >
                <img
                  src={ ingredient.strMealThumb }
                  data-testid={ `${index}-card-img` }
                  alt="IngredientImage"
                />
                <strong
                  data-testid={ `${index}-card-name` }
                >
                  { ingredient.strMeal }
                </strong>
              </li>
            </Link>
          ))}
        </ul>
      )}
      <Footer />
    </div>
  );
}

export default FoodsIngredients;
