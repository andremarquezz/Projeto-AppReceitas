import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { saveLocalStorage } from '../../services/LocalStorage';
import './index.css';

import loginImage from '../../images/login.svg';

function Login() {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const verifyInputs = () => {
    const miniPassword = 6;
    const errors = [
      !email.trim(),
      !email.match(/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/),
      password.length <= miniPassword,
    ];
    const hasErrors = errors.some((error) => error);
    return hasErrors;
  };

  const handleLocalStorage = async (event) => {
    event.preventDefault();
    saveLocalStorage('mealsToken', 1);
    saveLocalStorage('cocktailsToken', 1);
    saveLocalStorage('user', { email });
    history.push('/foods');
  };

  return (
    <div className="login-container">
      <div className="login-content">
        <div className="login-info">
          <img src={ loginImage } alt="LoginImage" />
          <strong> Fazendo o seu dia mais gostoso. Nunca foi tão facil cozinhar!</strong>
        </div>
        <form
          onSubmit={ handleLocalStorage }
          className="form"
        >
          <h3>Login</h3>
          <input
            type="email"
            placeholder="Email"
            data-testid="email-input"
            value={ email }
            onChange={ ({ target }) => setEmail(target.value) }
          />
          <input
            type="password"
            placeholder="Password"
            data-testid="password-input"
            value={ password }
            onChange={ ({ target }) => setPassword(target.value) }
          />
          <button
            type="submit"
            data-testid="login-submit-btn"
            disabled={ verifyInputs() }
          >
            Enter
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
