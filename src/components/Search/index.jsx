import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import apiFilter from '../../services/apiFilter';
import { actionFilteredData } from '../../redux/slices/filterSlice';

export default function Search() {
  const [localFilterType, setLocalFilterType] = useState('ingredient');

  const dispatch = useDispatch();
  const filtersData = useSelector((state) => state.filters);
  console.log('filtersData', filtersData);

  const handleFilter = async () => {
    const { textFilter, mealOrDrink } = filtersData;
    if (localFilterType === 'letter' && textFilter.length > 1) {
      return global.alert('Your search must have only 1 (one) character');
    }

    const data = await apiFilter(mealOrDrink, localFilterType, textFilter);
    dispatch(actionFilteredData(data));
  };

  const handleRadio = ({ target: { value } }) => {
    setLocalFilterType(value);
    console.log('radio', localFilterType);
  };

  return (
    <div className="search-container">
      <div className="search-contente">

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
