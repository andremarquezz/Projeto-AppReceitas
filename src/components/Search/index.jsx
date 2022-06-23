import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import apiFilter from '../../services/apiFilter';
import { actionFilteredData, actionRadioFilter } from '../../redux/slices/filterSlice';

export default function Search() {
  const dispatch = useDispatch();
  const filtersData = useSelector((state) => state.filters);
  const [valueRadio, setValueRadio] = useState('');

  const handleFilter = async () => {
    const { textFilter, mealOrDrink } = filtersData;
    if (valueRadio === 'letter' && textFilter.length > 1) {
      return global.alert('Your search must have only 1 (one) character');
    }
    dispatch(actionRadioFilter(valueRadio));

    const data = await apiFilter(mealOrDrink, valueRadio, textFilter);
    dispatch(actionFilteredData(data));
  };

  return (
    <div className="search-container">
      <div className="search-content">
        <label htmlFor="ingredient">
          Ingredient
          <input
            type="radio"
            id="ingredient"
            value="ingredient"
            name="filter-type"
            data-testid="ingredient-search-radio"
            defaultChecked
            onClick={ ({ target }) => setValueRadio(target.value) }
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
            onClick={ ({ target }) => setValueRadio(target.value) }
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
            onClick={ ({ target }) => setValueRadio(target.value) }
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
