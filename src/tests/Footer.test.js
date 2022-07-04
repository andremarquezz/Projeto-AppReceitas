import React from 'react';
import { screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import Login from '../Pages/Login';
import MainScreen from '../Pages/ScreenMain';
import RenderWithRouterAndRedux from './Helpers/RenderWithRouterAndRedux';
import {
  footerDivTestId,
  drinkIconTestId,
  exploreIconTestId,
  foodIconTestId,
} from './Data/footerTestData';
import MainScreenExplore from '../Pages/ScreenExploreMain';
import FoodsScreenExplore from '../Pages/FoodsScreenExplore';
import DrinksScreenExplore from '../Pages/DrinksScreenExplore';
import FoodsIngredients from '../Pages/FoodsIngredients';
import ScreenDetails from '../Pages/ScreenDetails';
// import FoodsNationalities from '../Pages/FoodsNationalities';
import ScreenProfile from '../Pages/ScreenProfile';
import ScreenFavoriteRecipes from '../Pages/ScreenFavoriteRecipes';
// import FoodsIngredients from '../Pages/DrinksIngredients';

describe('Teste do componente Footer', () => {
  it('Testa se o footer aparece na tela de login', () => {
    RenderWithRouterAndRedux(<Login />);
    const footerDiv = screen.queryByTestId(footerDivTestId);
    const foodButton = screen.queryByTestId(foodIconTestId);
    const exploreButton = screen.queryByTestId(exploreIconTestId);
    const drinkButton = screen.queryByTestId(drinkIconTestId);
    expect(footerDiv).not.toBeInTheDocument();
    expect(foodButton).not.toBeInTheDocument();
    expect(exploreButton).not.toBeInTheDocument();
    expect(drinkButton).not.toBeInTheDocument();
  });
  it('Testa se o footer aparece na tela de detalhes de uma receita de comida', () => {
    RenderWithRouterAndRedux(<ScreenDetails />, '/foods/53026');
    const footerDiv = screen.queryByTestId(footerDivTestId);
    const foodButton = screen.queryByTestId(foodIconTestId);
    const exploreButton = screen.queryByTestId(exploreIconTestId);
    const drinkButton = screen.queryByTestId(drinkIconTestId);
    expect(footerDiv).not.toBeInTheDocument();
    expect(foodButton).not.toBeInTheDocument();
    expect(exploreButton).not.toBeInTheDocument();
    expect(drinkButton).not.toBeInTheDocument();
  });
  it('Testa se o footer aparece na tela de detalhes de uma receita de bebida', () => {
    RenderWithRouterAndRedux(<ScreenDetails />, '/drinks/15997');
    const footerDiv = screen.queryByTestId(footerDivTestId);
    const foodButton = screen.queryByTestId(foodIconTestId);
    const exploreButton = screen.queryByTestId(exploreIconTestId);
    const drinkButton = screen.queryByTestId(drinkIconTestId);
    expect(footerDiv).not.toBeInTheDocument();
    expect(foodButton).not.toBeInTheDocument();
    expect(exploreButton).not.toBeInTheDocument();
    expect(drinkButton).not.toBeInTheDocument();
  });
  it('Testa se o footer aparece na tela principal de comidas', () => {
    RenderWithRouterAndRedux(<MainScreen />, '/foods');
    const footerDiv = screen.queryByTestId(footerDivTestId);
    const foodButton = screen.queryByTestId(foodIconTestId);
    const exploreButton = screen.queryByTestId(exploreIconTestId);
    const drinkButton = screen.queryByTestId(drinkIconTestId);
    expect(footerDiv).toBeInTheDocument();
    expect(foodButton).toBeInTheDocument();
    expect(exploreButton).toBeInTheDocument();
    expect(drinkButton).toBeInTheDocument();
  });
  it('Testa se o footer aparece na tela principal de bebidas', () => {
    RenderWithRouterAndRedux(<MainScreen />, '/drinks');
    const footerDiv = screen.queryByTestId(footerDivTestId);
    const foodButton = screen.queryByTestId(foodIconTestId);
    const exploreButton = screen.queryByTestId(exploreIconTestId);
    const drinkButton = screen.queryByTestId(drinkIconTestId);
    expect(footerDiv).toBeInTheDocument();
    expect(foodButton).toBeInTheDocument();
    expect(exploreButton).toBeInTheDocument();
    expect(drinkButton).toBeInTheDocument();
  });
  it('Testa se o footer aparece na tela de explorar', () => {
    RenderWithRouterAndRedux(<MainScreenExplore />, '/explore');
    const footerDiv = screen.queryByTestId(footerDivTestId);
    const foodButton = screen.queryByTestId(foodIconTestId);
    const exploreButton = screen.queryByTestId(exploreIconTestId);
    const drinkButton = screen.queryByTestId(drinkIconTestId);
    expect(footerDiv).toBeInTheDocument();
    expect(foodButton).toBeInTheDocument();
    expect(exploreButton).toBeInTheDocument();
    expect(drinkButton).toBeInTheDocument();
  });
  it('Testa se o footer aparece na tela de explorar comidas', () => {
    RenderWithRouterAndRedux(<FoodsScreenExplore />, '/explore/foods');
    const footerDiv = screen.queryByTestId(footerDivTestId);
    const foodButton = screen.queryByTestId(foodIconTestId);
    const exploreButton = screen.queryByTestId(exploreIconTestId);
    const drinkButton = screen.queryByTestId(drinkIconTestId);
    expect(footerDiv).toBeInTheDocument();
    expect(foodButton).toBeInTheDocument();
    expect(exploreButton).toBeInTheDocument();
    expect(drinkButton).toBeInTheDocument();
  });
  it('Testa se o footer aparece na tela de explorar bebidas', () => {
    RenderWithRouterAndRedux(<DrinksScreenExplore />, '/explore/drinks');
    const footerDiv = screen.queryByTestId(footerDivTestId);
    const foodButton = screen.queryByTestId(foodIconTestId);
    const exploreButton = screen.queryByTestId(exploreIconTestId);
    const drinkButton = screen.queryByTestId(drinkIconTestId);
    expect(footerDiv).toBeInTheDocument();
    expect(foodButton).toBeInTheDocument();
    expect(exploreButton).toBeInTheDocument();
    expect(drinkButton).toBeInTheDocument();
  });
  it('Testa se o footer aparece na tela de explorar comidas por ingrediente', () => {
    RenderWithRouterAndRedux(<FoodsIngredients />, '/explore/foods/ingredients');
    const footerDiv = screen.queryByTestId(footerDivTestId);
    const foodButton = screen.queryByTestId(foodIconTestId);
    const exploreButton = screen.queryByTestId(exploreIconTestId);
    const drinkButton = screen.queryByTestId(drinkIconTestId);
    expect(footerDiv).toBeInTheDocument();
    expect(foodButton).toBeInTheDocument();
    expect(exploreButton).toBeInTheDocument();
    expect(drinkButton).toBeInTheDocument();
  });
  // it('Testa se o footer aparece na tela de explorar bebidas por ingrediente', () => {
  //   RenderWithRouterAndRedux(<MainScreen />, '/explorar/drinks/ingrediente');
  //   const footerDiv = screen.queryByTestId(footerDivTestId);
  //   const foodButton = screen.queryByTestId(foodIconTestId);
  //   const exploreButton = screen.queryByTestId(exploreIconTestId);
  //   const drinkButton = screen.queryByTestId(drinkIconTestId);
  //   expect(footerDiv).toBeInTheDocument();
  //   expect(foodButton).toBeInTheDocument();
  //   expect(exploreButton).toBeInTheDocument();
  //   expect(drinkButton).toBeInTheDocument();
  // });
  // it('Testa se o footer aparece na tela de explorar comidas por nacionalidade', () => {
  //   RenderWithRouterAndRedux(<FoodsNationalities />, '/explore/foods/nationalities');
  //   const footerDiv = screen.queryByTestId(footerDivTestId);
  //   const foodButton = screen.queryByTestId(foodIconTestId);
  //   const exploreButton = screen.queryByTestId(exploreIconTestId);
  //   const drinkButton = screen.queryByTestId(drinkIconTestId);
  //   expect(footerDiv).toBeInTheDocument();
  //   expect(foodButton).toBeInTheDocument();
  //   expect(exploreButton).toBeInTheDocument();
  //   expect(drinkButton).toBeInTheDocument();
  // });
  it('Testa se o footer aparece na tela de profile', () => {
    RenderWithRouterAndRedux(<ScreenProfile />, '/profile');
    const footerDiv = screen.queryByTestId(footerDivTestId);
    const foodButton = screen.queryByTestId(foodIconTestId);
    const exploreButton = screen.queryByTestId(exploreIconTestId);
    const drinkButton = screen.queryByTestId(drinkIconTestId);
    expect(footerDiv).toBeInTheDocument();
    expect(foodButton).toBeInTheDocument();
    expect(exploreButton).toBeInTheDocument();
    expect(drinkButton).toBeInTheDocument();
  });
  it('Testa se o footer aparece na tela de receitas feitas', () => {
    RenderWithRouterAndRedux(<ScreenFavoriteRecipes />, '/done-recipes');
    const footerDiv = screen.queryByTestId(footerDivTestId);
    const foodButton = screen.queryByTestId(foodIconTestId);
    const exploreButton = screen.queryByTestId(exploreIconTestId);
    const drinkButton = screen.queryByTestId(drinkIconTestId);
    expect(footerDiv).not.toBeInTheDocument();
    expect(foodButton).not.toBeInTheDocument();
    expect(exploreButton).not.toBeInTheDocument();
    expect(drinkButton).not.toBeInTheDocument();
  });
  it('Testa se o footer aparece na tela de receitas favoritas', () => {
    RenderWithRouterAndRedux(<ScreenFavoriteRecipes />, '/favorite-recipes');
    const footerDiv = screen.queryByTestId(footerDivTestId);
    const foodButton = screen.queryByTestId(foodIconTestId);
    const exploreButton = screen.queryByTestId(exploreIconTestId);
    const drinkButton = screen.queryByTestId(drinkIconTestId);
    expect(footerDiv).not.toBeInTheDocument();
    expect(foodButton).not.toBeInTheDocument();
    expect(exploreButton).not.toBeInTheDocument();
    expect(drinkButton).not.toBeInTheDocument();
  });
  it('Redirecione para uma lista de cocktails ao clicar no ícone de bebidas', () => {
    const { history } = RenderWithRouterAndRedux(<MainScreen />, '/foods');
    const drinkButton = screen.getByTestId(drinkIconTestId);
    userEvent.click(drinkButton);
    expect(history.location.pathname).toBe('/drinks');
  });
  it('Redirecione para a tela de explorar ao clicar no ícone de explorar', () => {
    const { history } = RenderWithRouterAndRedux(<MainScreenExplore />, '/explore');
    const exploreButton = screen.getByTestId(exploreIconTestId);
    userEvent.click(exploreButton);
    expect(history.location.pathname).toBe('/explore');
  });
  it('Redirecione para a tela de comidas ao clicar no ícone de comidas', () => {
    const { history } = RenderWithRouterAndRedux(<MainScreen />, '/drinks');
    const foodsButton = screen.getByTestId(foodIconTestId);
    userEvent.click(foodsButton);
    expect(history.location.pathname).toBe('/foods');
  });
});
