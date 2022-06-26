import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { getLocalStorage } from '../../services/LocalStorage';

import './index.css';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import profileIcon from '../../images/profileIcon.svg';

function ScreenProfile() {
  const [userEmail, setUserEmail] = useState();
  const { push } = useHistory();

  useEffect(() => {
    const getEmail = getLocalStorage('user');
    setUserEmail(getEmail.email);
  }, []);

  const excludeLocalStorage = () => {
    localStorage.clear();
    return push('/');
  };

  return (
    <div>
      <Header />
      <div className="profile-content">
        <div className="profile-info">
          <img src={ profileIcon } alt="IconProfile" />
          <span
            data-testid="profile-email"
          >
            { userEmail }
          </span>
        </div>
        <div className="profile-actions">
          <div className="profile-actions-title">
            <strong>Acesse</strong>
          </div>
          <button
            type="button"
            data-testid="profile-done-btn"
            onClick={ () => push('/done-recipes') }
          >
            Done Recipes
          </button>

          <button
            type="button"
            data-testid="profile-favorite-btn"
            onClick={ () => push('/favorite-recipes') }
          >
            Favorite Recipes
          </button>
        </div>

        <div className="btn-logout">
          <button
            type="button"
            data-testid="profile-logout-btn"
            onClick={ () => excludeLocalStorage() }
          >
            Logout
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default ScreenProfile;
