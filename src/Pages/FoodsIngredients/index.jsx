import { useDispatch } from 'react-redux';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { fetchIngredients, filterByIngredients } from '../../services/apiFilter';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import {
  actionFilterIngredients,
  actionCardIngredients,
} from '../../redux/slices/filterSlice';
import './index.css';

function FoodsIngredients() {
  const [ingredientsList, setIngredientsList] = useState([]);
  const [loading, setLoading] = useState(true);
  const {
    location: { pathname },
    push,
  } = useHistory();

  const dispatch = useDispatch();

  useEffect(() => {
    if (ingredientsList.length !== 0) return setLoading(false);
    return setLoading(true);
  }, [ingredientsList]);

  useEffect(() => {
    const MAX_LIST_INGREDIENTS = 12;
    const getByIngredients = async () => {
      const response = await fetchIngredients('meals');
      const ingredients = response.meals.slice(0, MAX_LIST_INGREDIENTS);
      return setIngredientsList(ingredients);
    };

    getByIngredients();
  }, []);

  const setCardsIngredients = async (ingredient) => {
    const type = pathname.split('/')[2];
    const data = await filterByIngredients(ingredient, type);
    dispatch(actionFilterIngredients(data));
    dispatch(actionCardIngredients(true));
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
              onClick={ () => setCardsIngredients(ingredient.strIngredient) }
            >
              <li className="ingrediets-item" data-testid={ `${index}-ingredient-card` }>
                <img
                  src={ `https://www.themealdb.com/images/ingredients/${ingredient.strIngredient}-Small.png` }
                  data-testid={ `${index}-card-img` }
                  alt="IngredientImage"
                />
                <strong data-testid={ `${index}-card-name` }>
                  {ingredient.strIngredient}
                </strong>
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
