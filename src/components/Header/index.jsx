import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import IconProfile from '../../images/profileIcon.svg';
import IconSearch from '../../images/searchIcon.svg';

function Header({ pageTittle, buttonSearch }) {
  const [inputSearch, setInputSearch] = useState(false);
  const history = useHistory();

  return (
    <header>
      <button type="button" onClick={ () => history.push('/profile') }>
        <img src={ IconProfile } alt="Icone do Perfil" data-testid="profile-top-btn" />
      </button>
      <h3 data-testid="page-title">{pageTittle}</h3>
      {buttonSearch && (
        <button type="button" onClick={ () => setInputSearch(!inputSearch) }>
          <img src={ IconSearch } alt="Icone de busca" data-testid="search-top-btn" />
        </button>
      )}
      <div>
        {inputSearch && (
          <input
            type="text"
            name="inputSearch"
            placeholder="Pesquisar"
            data-testid="search-input"
          />
        )}
      </div>
    </header>
  );
}

Header.defaultProps = {
  buttonSearch: false,
};

Header.propTypes = {
  pageTittle: PropTypes.string.isRequired,
  buttonSearch: PropTypes.bool,
};

export default Header;
