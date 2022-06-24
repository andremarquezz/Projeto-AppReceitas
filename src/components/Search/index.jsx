import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { actionRadioFilter, actionTextFilter } from '../../redux/slices/filterSlice';
import './index.css';

export default function Search({ inputText }) {
  const dispatch = useDispatch();
  const [valueRadio, setValueRadio] = useState('');

  const handleFilter = async (e) => {
    e.preventDefault();
    if (valueRadio === 'letter' && inputText.length > 1) {
      return global.alert('Your search must have only 1 (one) character');
    }
    dispatch(actionTextFilter(inputText));
    dispatch(actionRadioFilter(valueRadio));
  };

  return (
    <div className="search-container">
      <div className="search-content">
        <form onSubmit={ (e) => handleFilter(e) }>
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
          <div className="search-btn">
            <button className="btn-search" type="submit" data-testid="exec-search-btn">
              Search
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

Search.defaultProps = {
  inputText: '',
};

Search.propTypes = {
  inputText: PropTypes.string,
};
