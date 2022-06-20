import React, { useState } from 'react';
import styles from './index.css';

function Login() {
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
  return (
    <div className={ styles.loginContainer }>
      <div className={ styles.loginContent }>
        <form>
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
            type="button"
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
