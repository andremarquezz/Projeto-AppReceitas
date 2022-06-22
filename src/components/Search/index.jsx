import React, { useState } from 'react';
import apiFilter from '../../services/apiFilter';

export default function Search() {
  const [localFilter, setLocalFilter] = useState({ type: 'ingredient', search: '' });

  // ====> stados a serem mudado de lugar <====
  const [temporaryFilter, setTemporaryFilter] = useState([]);
  const [tempFoodOrDrink] = useState('meal');

  const handleFilter = async () => {
    const { type, search } = localFilter;
    if (type === 'letter' && search.length > 1) {
      return global.alert('Your search must have only 1 (one) character');
    }
    console.log('data', temporaryFilter);

    const data = await apiFilter(tempFoodOrDrink, localFilter);
    setTemporaryFilter(data);
  };

  const handleRadio = ({ target: { value } }) => {
    setLocalFilter({ ...localFilter, type: value });
    console.log('radio', localFilter);
  };

  return (
    <div className="search-container">
      <div>

        <label htmlFor="ingredient">
          Ingredient
          <input
            type="radio"
            id="ingredient"
            value="ingredient"
            name="filter-type"
            data-testid="ingredient-search-radio"
            defaultChecked
            onClick={ (e) => handleRadio(e) }
          />
        </label>

        <label htmlFor="name">
          Name
          <input
            type="radio"
            id="name"
            value="name"
            name="filter-type"
            data-testid="name-search-radio"
            onClick={ (e) => handleRadio(e) }
          />
        </label>

        <label htmlFor="letter">
          First letter
          <input
            type="radio"
            id="letter"
            value="letter"
            name="filter-type"
            data-testid="first-letter-search-radio"
            onClick={ (e) => handleRadio(e) }
          />
        </label>

        <button
          type="button"
          data-testid="exec-search-btn"
          onClick={ () => handleFilter() }
        >
          Search
        </button>

      </div>
    </div>
  );
}
