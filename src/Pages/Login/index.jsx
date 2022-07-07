import React, { useState } from 'react';
import Rodal from 'rodal';
import { useHistory } from 'react-router-dom';
import { saveLocalStorage } from '../../services/LocalStorage';
import './index.css';
import 'rodal/lib/rodal.css';

import loginImage from '../../images/logo.png';

function Login() {
  const [visibleModal, setVisibleModal] = useState(false);
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
    if (verifyInputs()) {
      return setVisibleModal(true);
    }
    saveLocalStorage('mealsToken', 1);
    saveLocalStorage('cocktailsToken', 1);
    saveLocalStorage('user', { email });
    history.push('/foods');
  };

  return (
    <div className="login-container">
      <div>
        <Rodal
          visible={ visibleModal }
          onClose={ () => setVisibleModal(false) }
          width={ 400 }
          height={ 80 }
        >
          <div>É necessario preencher informações validas.</div>
          <p>Email valido e senha com no minino 6 caracteres</p>
        </Rodal>
      </div>
      <div className="login-content">
        <div className="login-info">
          <img src={ loginImage } alt="LoginImage" />
          <strong> Fazendo o seu dia mais gostoso. Nunca foi tão facil cozinhar!</strong>
        </div>
        <form onSubmit={ handleLocalStorage } className="form">
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
          <button type="submit">Enter</button>
        </form>
      </div>
    </div>
  );
}

export default Login;
