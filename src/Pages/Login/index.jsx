import React from 'react';
import styles from './index.css';

function Login() {
  return (
    <div className={ styles.loginContainer }>
      <div className={ styles.loginContent }>
        <form>
          <h3>Login</h3>
          <input type="text" placeholder="Email" data-testid="email-input" />
          <input type="password" placeholder="Password" data-testid="password-input" />
          <button type="button" data-testid="login-submit-btn">
            Enter
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
