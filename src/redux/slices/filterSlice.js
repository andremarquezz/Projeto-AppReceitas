import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  textFilter: '',
  mealOrDrink: 'meal',
  filteredData: '',
  radioFilter: 'name',
  categoryFilter: [],
  cardCategories: false,
  dataIngredient: false,
  cardIngredient: false,
  cardNationalities: false,
  dataNationalities: [],
};

const reducers = {
  actionFilteredData: (state, { payload }) => {
    if (payload === null) {
      return;
    }
    state.filteredData = payload;
    if (!payload.drinks && !payload.meals) {
      state.filteredData = [];
    }
  },
  actionTextFilter: (state, { payload }) => {
    state.textFilter = payload;
  },
  actionMealOrDrink: (state, { payload }) => {
    state.mealOrDrink = payload;
  },
  actionRadioFilter: (state, { payload }) => {
    state.radioFilter = payload;
  },
  actionCardCategories: (state, { payload }) => {
    state.cardCategories = payload;
  },
  actionFilterIngredients: (state, { payload }) => {
    state.dataIngredient = payload;
  },
  actionCategoryFilter: (state, { payload }) => {
    state.categoryFilter = payload;
  },
  actionCardIngredients: (state, { payload }) => {
    state.cardIngredient = payload;
  },
  actionCardNationalities: (state, { payload }) => {
    state.cardNationalities = payload;
  },
  actionDataNationalities: (state, { payload }) => {
    state.dataNationalities = payload;
  },
};

export const slice = createSlice({
  name: 'filters',
  initialState: INITIAL_STATE,
  reducers,
});

export const {
  actionTextFilter,
  actionFilteredData,
  actionMealOrDrink,
  actionRadioFilter,
  actionCategoryFilter,
  actionCardCategories,
  actionFilterIngredients,
  actionCardIngredients,
  actionDataNationalities,
} = slice.actions;

export default slice.reducer;
