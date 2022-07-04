import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import RenderWithRouterAndRedux from './Helpers/RenderWithRouterAndRedux';
import MainScreen from '../Pages/ScreenMain';
import {
  profileTopButtonTestId,
  pageTitleTestId,
  searchTopButtonTestId,
  searchInputTestId,
} from './Data/headerTestData';
import Login from '../Pages/Login';
import MainScreenExplore from '../Pages/ScreenExploreMain';
import FoodsScreenExplore from '../Pages/FoodsScreenExplore';
import DrinksScreenExplore from '../Pages/DrinksScreenExplore';
import FoodsIngredients from '../Pages/FoodsIngredients';
import ScreenDetails from '../Pages/ScreenDetails';
// import FoodsNationalities from '../Pages/FoodsNationalities';
import ScreenProfile from '../Pages/ScreenProfile';
import ScreenFavoriteRecipes from '../Pages/ScreenFavoriteRecipes';
// import FoodsIngredients from '../Pages/DrinksIngredients';

describe('Teste do componente Header', () => {
  it('Testa se os icones de profile, search e titulo estão na tela', () => {
    RenderWithRouterAndRedux(<MainScreen />, '/foods');
    const profileButton = screen.getByTestId(profileTopButtonTestId);
    const pageTitle = screen.getByTestId(pageTitleTestId);
    const searchButton = screen.getByTestId(searchTopButtonTestId);
    expect(profileButton).toBeInTheDocument();
    expect(pageTitle).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });
  it('Testa se o header aparece na tela de login', () => {
    RenderWithRouterAndRedux(<Login />);
    const profileButton = screen.queryByTestId(profileTopButtonTestId);
    const pageTitle = screen.queryByTestId(pageTitleTestId);
    const searchButton = screen.queryByTestId(searchTopButtonTestId);
    expect(profileButton).not.toBeInTheDocument();
    expect(pageTitle).not.toBeInTheDocument();
    expect(searchButton).not.toBeInTheDocument();
  });
  it('Testa se o header aparece na tela de detalhes de uma receita de comida', () => {
    RenderWithRouterAndRedux(<ScreenDetails />, '/foods/53026');
    const profileButton = screen.queryByTestId(profileTopButtonTestId);
    const pageTitle = screen.queryByTestId(pageTitleTestId);
    const searchButton = screen.queryByTestId(searchTopButtonTestId);
    expect(profileButton).not.toBeInTheDocument();
    expect(pageTitle).not.toBeInTheDocument();
    expect(searchButton).not.toBeInTheDocument();
  });
  it('Testa se o header aparece na tela de detalhes de uma receita de bebida', () => {
    RenderWithRouterAndRedux(<ScreenDetails />, '/drinks/15997');
    const profileButton = screen.queryByTestId(profileTopButtonTestId);
    const pageTitle = screen.queryByTestId(pageTitleTestId);
    const searchButton = screen.queryByTestId(searchTopButtonTestId);
    expect(profileButton).not.toBeInTheDocument();
    expect(pageTitle).not.toBeInTheDocument();
    expect(searchButton).not.toBeInTheDocument();
  });
  it('Testa se o header aparece na tela principal de comidas', () => {
    RenderWithRouterAndRedux(<MainScreen />, '/foods');
    const profileButton = screen.queryByTestId(profileTopButtonTestId);
    const pageTitle = screen.queryByTestId(pageTitleTestId);
    const searchButton = screen.queryByTestId(searchTopButtonTestId);
    expect(profileButton).toBeInTheDocument();
    expect(pageTitle).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });
  it('Testa se o header aparece na tela principal de bebidas', () => {
    RenderWithRouterAndRedux(<MainScreen />, '/drinks');
    const profileButton = screen.queryByTestId(profileTopButtonTestId);
    const pageTitle = screen.queryByTestId(pageTitleTestId);
    const searchButton = screen.queryByTestId(searchTopButtonTestId);
    expect(profileButton).toBeInTheDocument();
    expect(pageTitle).toBeInTheDocument();
    expect(searchButton).toBeInTheDocument();
  });
  it('Testa se o header aparece na tela de explorar', () => {
    RenderWithRouterAndRedux(<MainScreenExplore />, '/explore');
    const profileButton = screen.queryByTestId(profileTopButtonTestId);
    const pageTitle = screen.queryByTestId(pageTitleTestId);
    expect(profileButton).toBeInTheDocument();
    expect(pageTitle).toBeInTheDocument();
  });
  it('Testa se o header aparece na tela de explorar comidas', () => {
    RenderWithRouterAndRedux(<FoodsScreenExplore />, '/explore/foods');
    const profileButton = screen.queryByTestId(profileTopButtonTestId);
    const pageTitle = screen.queryByTestId(pageTitleTestId);
    expect(profileButton).toBeInTheDocument();
    expect(pageTitle).toBeInTheDocument();
  });
  it('Testa se o header aparece na tela de explorar bebidas', () => {
    RenderWithRouterAndRedux(<DrinksScreenExplore />, '/explore/drinks');
    const profileButton = screen.queryByTestId(profileTopButtonTestId);
    const pageTitle = screen.queryByTestId(pageTitleTestId);
    expect(profileButton).toBeInTheDocument();
    expect(pageTitle).toBeInTheDocument();
  });
  it('Testa se o header aparece na tela de explorar comidas por ingrediente', () => {
    RenderWithRouterAndRedux(<FoodsIngredients />, '/explore/foods/ingredients');
    const profileButton = screen.queryByTestId(profileTopButtonTestId);
    const pageTitle = screen.queryByTestId(pageTitleTestId);
    expect(profileButton).toBeInTheDocument();
    expect(pageTitle).toBeInTheDocument();
  });
  // it('Testa se o header aparece na tela de explorar bebidas por ingrediente', () => {
  //   renderWithRouterAndRedux(<MainScreen />, '/explorar/drinks/ingrediente');
  //   const profileButton = screen.queryByTestId(profileTopButtonTestId);
  //   const pageTitle = screen.queryByTestId(pageTitleTestId);
  //   const searchButton = screen.queryByTestId(searchTopButtonTestId);
  //   expect(profileButton).toBeInTheDocument();
  //   expect(pageTitle).toBeInTheDocument();
  //   expect(searchButton).toBeInTheDocument();
  // });
  // it('Testa se o header aparece na tela de explorar comidas por nacionalidade', () => {
  //   renderWithRouterAndRedux(<MainScreen />, '/explorar/foods/nacionalidade');
  //   const profileButton = screen.queryByTestId(profileTopButtonTestId);
  //   const pageTitle = screen.queryByTestId(pageTitleTestId);
  //   const searchButton = screen.queryByTestId(searchTopButtonTestId);
  //   expect(profileButton).toBeInTheDocument();
  //   expect(pageTitle).toBeInTheDocument();
  //   expect(searchButton).toBeInTheDocument();
  // });
  it('Testa se o header aparece na tela de profile', () => {
    RenderWithRouterAndRedux(<ScreenProfile />, '/profile');
    const profileButton = screen.queryByTestId(profileTopButtonTestId);
    const pageTitle = screen.queryByTestId(pageTitleTestId);
    expect(profileButton).toBeInTheDocument();
    expect(pageTitle).toBeInTheDocument();
  });
  it('Testa se o header aparece na tela de receitas feitas', () => {
    RenderWithRouterAndRedux(<ScreenFavoriteRecipes />, '/done-recipes');
    const profileButton = screen.queryByTestId(profileTopButtonTestId);
    const pageTitle = screen.queryByTestId(pageTitleTestId);
    expect(profileButton).toBeInTheDocument();
    expect(pageTitle).toBeInTheDocument();
  });
  it('Testa se o header aparece na tela de receitas favoritas', () => {
    RenderWithRouterAndRedux(<ScreenFavoriteRecipes />, '/favorite-recipes');
    const profileButton = screen.queryByTestId(profileTopButtonTestId);
    const pageTitle = screen.queryByTestId(pageTitleTestId);
    expect(profileButton).toBeInTheDocument();
    expect(pageTitle).toBeInTheDocument();
  });
  it('Redireciona para a pagina de profile quando clicado no icone', () => {
    const { history } = RenderWithRouterAndRedux(<ScreenProfile />, '/profile');
    const profileButton = screen.getByTestId(profileTopButtonTestId);
    userEvent.click(profileButton);
    const { location: { pathname } } = history;
    expect(pathname).toBe('/profile');
  });
  it('Esconde e revela a barra de pesquisa ao clicar no botão de busca', () => {
    RenderWithRouterAndRedux(<MainScreen />, '/foods');
    const searchButton = screen.getByTestId(searchTopButtonTestId);
    userEvent.click(searchButton);
    const searchInput = screen.getByTestId(searchInputTestId);
    expect(searchInput).toBeInTheDocument();
    userEvent.click(searchButton);
    expect(searchInput).not.toBeInTheDocument();
  });
});
