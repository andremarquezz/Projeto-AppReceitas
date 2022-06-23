import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import IconProfile from '../../images/profileIcon.svg';
import IconSearch from '../../images/searchIcon.svg';
import { actionTextFilter } from '../../redux/slices/filterSlice';
import Search from '../Search/index';
import verifyTittle from '../../services/verifyTittle';

import './index.css';

function Header({ buttonSearch }) {
  const [inputSearch, setInputSearch] = useState(false);
  const history = useHistory();
  const dispatch = useDispatch();

  const handleInput = ({ target: { value } }) => {
    dispatch(actionTextFilter(value));
  };

  const {
    location: { pathname },
  } = history;

  return (
    <header className="header-container">
      <div className="header-content">
        <div className="header-nav">
          <button type="button" onClick={ () => history.push('/profile') }>
            <img
              src={ IconProfile }
              alt="Icone do Perfil"
              data-testid="profile-top-btn"
            />
          </button>
          <h3 data-testid="page-title">{verifyTittle(pathname)}</h3>

          {buttonSearch && (
            <button type="button" onClick={ () => setInputSearch(!inputSearch) }>
              <img src={ IconSearch } alt="Icone de busca" data-testid="search-top-btn" />
            </button>
          )}
        </div>
        {inputSearch && (
          <div className="search">
            <input
              type="text"
              className="input-search"
              name="inputSearch"
              placeholder="Pesquisar"
              data-testid="search-input"
              onChange={ (e) => handleInput(e) }
            />
            <Search />
          </div>
        )}
      </div>
    </header>
  );
}

Header.defaultProps = {
  buttonSearch: false,
};

Header.propTypes = {
  buttonSearch: PropTypes.bool,
};

export default Header;
