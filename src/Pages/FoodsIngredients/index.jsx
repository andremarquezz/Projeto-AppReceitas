import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import apiFilter, { filterByIngredients } from '../../services/apiFilter';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import { actionFilterIngredients } from '../../redux/slices/filterSlice';
import './index.css';

const MAX_LIST_INGREDIENTS = 12;

function FoodsIngredients() {
  const [ingredientsList, setIngredientsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const {
    location: { pathname },
    push,
  } = useHistory();

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

  const setCardsIngredients = async (ingredient) => {
    const type = pathname.split('/')[2];
    const data = await filterByIngredients(ingredient, type);
    console.log({ data });
    console.log({ type });
    console.log({ ingredient });
    actionFilterIngredients(data);
    push('/foods');
  };

  return (
    <div>
      <Header />
      <div className="foods-ingredients-title">
        <strong>Ingredients</strong>
      </div>
      {!loading && (
        <ul className="foods-ingredients-list">
          {ingredientsList.map((ingredient, index) => (
            <button
              type="button"
              key={ index }
              onClick={ () => setCardsIngredients(ingredient.strMeal) }
            >
              <li className="ingrediets-item" data-testid={ `${index}-ingredient-card` }>
                <img
                  src={ ingredient.strMealThumb }
                  data-testid={ `${index}-card-img` }
                  alt="IngredientImage"
                />
                <strong data-testid={ `${index}-card-name` }>{ingredient.strMeal}</strong>
              </li>
            </button>
          ))}
        </ul>
      )}
      <Footer />
    </div>
  );
}

export default FoodsIngredients;
