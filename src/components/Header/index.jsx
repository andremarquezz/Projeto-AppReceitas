import React from 'react';
import PropTypes from 'prop-types';

function Header({ pageTittle }) {
  return (
    <header>
      <p data-testid="profile-top-btn">Profile</p>
      <h3 data-testid="page-title">{pageTittle}</h3>
      <button type="button" data-testid="search-top-btn">
        Pesquisar
      </button>
    </header>
  );
}

Header.propTypes = {
  pageTittle: PropTypes.string.isRequired,
};

export default Header;
