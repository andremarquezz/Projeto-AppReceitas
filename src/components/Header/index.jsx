import React from 'react';
import PropTypes from 'prop-types';
import IconProfile from '../../images/profileIcon.svg';
import IconSearch from '../../images/searchIcon.svg';

function Header({ pageTittle }) {
  return (
    <header>
      <img src={ IconProfile } alt="Icone do Perfil" data-testid="profile-top-btn" />
      <h3 data-testid="page-title">{pageTittle}</h3>
      <button type="button" data-testid="search-top-btn">
        <img src={ IconSearch } alt="Icone de busca" />
      </button>
    </header>
  );
}

Header.propTypes = {
  pageTittle: PropTypes.string.isRequired,
};

export default Header;
