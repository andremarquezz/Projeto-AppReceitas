import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../Pages/Login';
import App from '../App';
import renderWithRouter from './RenderWithRouter';

describe('Teste da tela de Login', () => {
  it('Testa se pagina inicial é renderizada corretamente', () => {
    const { history, debug } = renderWithRouter(<Login />);
    debug();
    expect(history.location.pathname).toBe('/');
  });

  // it('Verifica se existe na pagina os campos de nome e email', () => {
  //   const inputName = screen.getByTestId('input-player-name');
  //   const inputEmail = screen.getByTestId('input-gravatar-email');

  //   expect(inputName).toBeInTheDocument();
  //   expect(inputEmail).toBeInTheDocument();
  // });

  // it('Verifica se existe um botão com o texto "Play"', () => {
  //   renderWithRouterAndRedux(<Login />);

  //   const button = screen.getByTestId('btn-play');
  //   expect(button).toBeInTheDocument();
  //   expect(button).toHaveTextContent('Play');
  // });

  // it('Realize as seguintes verificações nos campos de email, senha e botão:', () => {
  //   renderWithRouterAndRedux(<Login />);

  //   const button = screen.getByTestId('btn-play');
  //   expect(button).toBeDisabled();

  //   const name = screen.getByTestId('input-player-name');
  //   const email = screen.getByTestId('input-gravatar-email');

  //   userEvent.type(name, 'Teste');
  //   userEvent.type(email, 'teste');
  //   expect(button).toBeDisabled();

  //   userEvent.type(name, ' ');
  //   userEvent.type(email, 'teste@teste.com');
  //   expect(button).toBeDisabled();

  //   userEvent.type(name, 'Teste');
  //   userEvent.type(email, ' ');
  //   expect(button).toBeDisabled();

  //   userEvent.type(name, 'Teste');
  //   userEvent.type(email, 'teste@teste.com');
  //   expect(button).toBeEnabled();
  // });

  // // TODO:  Fazer teste da resposta do fetch.
  // it('Testa se ao clicar em Play o Token é pego', () => {
  //   const { history } = renderWithRouterAndRedux(<App />);
  //   const inputName = screen.getByTestId('input-player-name');
  //   const inputEmail = screen.getByTestId('input-gravatar-email');
  //   const button = screen.getByTestId('btn-play');

  //   userEvent.type(inputName, 'Teste');
  //   userEvent.type(inputEmail, 'teste@teste.com');
  //   expect(button).toBeEnabled();

  //   userEvent.click(button);
  //   expect(mockFetch).toHaveBeenCalledTimes(1);
  //   history.push('/game');
  //   expect(history.location.pathname).toBe('/game');
  // });
});
