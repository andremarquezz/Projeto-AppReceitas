import React from 'react';
import PropTypes from 'prop-types';

import './index.css';

function RecomedeCard({ url, type, title }) {
  return (
    <li className="card-recomeded">
      <img src={ url } alt={ title } />
      <div className="card-recomeded-info">
        <span className="recomended-type">{ type }</span>
        <strong className="recomended-title">{ title }</strong>
      </div>
    </li>
  );
}

export default RecomedeCard;

RecomedeCard.propTypes = {
  url: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
