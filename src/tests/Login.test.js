import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../Pages/Login';
import renderWithRouter from './Helpers/RenderWithRouter';
import {
  emailInputTestId,
  passwordInputTestId,
  loginButtonTestId,
  correctEmail,
  correctPassword,
  wrongEmail,
  wrongPassword,
} from './Data/loginTestData';

describe('Teste da tela de Login', () => {
  it('Testa se pagina inicial  é renderizada corretamente', () => {
    const { history } = renderWithRouter(<Login />);
    expect(history.location.pathname).toBe('/');
  });

  it('Verifica se existe na pagina um botao `Enter` e campos de Email e Senha', () => {
    renderWithRouter(<Login />);
    const inputEmail = screen.queryByTestId(emailInputTestId);
    const inputPassword = screen.getByTestId(passwordInputTestId);
    const button = screen.getByTestId(loginButtonTestId);

    expect(inputEmail).toBeInTheDocument();
    expect(inputPassword).toBeInTheDocument();
    expect(button).toBeInTheDocument();
    expect(button).toHaveTextContent('Enter');
  });

  it('Realize as seguintes verificações nos campos de email, senha e botão:', () => {
    renderWithRouter(<Login />);

    const button = screen.getByTestId(loginButtonTestId);
    expect(button).toBeDisabled();

    const email = screen.getByTestId(emailInputTestId);
    const password = screen.getByTestId(passwordInputTestId);

    userEvent.type(email, wrongEmail);
    userEvent.type(password, wrongPassword);
    expect(button).toBeDisabled();

    userEvent.type(email, correctEmail);
    userEvent.type(password, ' ');
    expect(button).toBeDisabled();

    userEvent.type(email, ' ');
    userEvent.type(password, wrongPassword);
    expect(button).toBeDisabled();

    userEvent.type(email, correctEmail);
    userEvent.type(password, correctPassword);
    expect(button).toBeEnabled();
  });

  it('Verifica se as chaves estão sendo salvas no localStorage', () => {
    renderWithRouter(<Login />);
    const button = screen.getByTestId(loginButtonTestId);
    const email = screen.getByTestId(emailInputTestId);
    const password = screen.getByTestId(passwordInputTestId);
    userEvent.type(email, correctEmail);
    userEvent.type(password, correctPassword);
    userEvent.click(button);

    const mealsToken = localStorage.getItem('mealsToken');
    const cocktailsToken = localStorage.getItem('cocktailsToken');
    const userToken = localStorage.getItem('user');

    expect(mealsToken).toBe('1');
    expect(cocktailsToken).toBe('1');
    expect(JSON.parse(userToken)).toStrictEqual({ email: correctEmail });
  });

  it('Verifica se é redirecionado para tela principal de receitas de comidas', () => {
    const { history } = renderWithRouter(<Login />);
    const button = screen.getByTestId(loginButtonTestId);
    const email = screen.getByTestId(emailInputTestId);
    const password = screen.getByTestId(passwordInputTestId);
    userEvent.type(email, correctEmail);
    userEvent.type(password, correctPassword);
    userEvent.click(button);

    const { location } = history;
    expect(location.pathname).toBe('/foods');
  });
});
