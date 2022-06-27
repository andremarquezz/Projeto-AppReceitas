import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  textFilter: '',
  mealOrDrink: 'meal',
  filteredData: '',
  radioFilter: 'name',
};

const reducers = {
  actionFilteredData: (state, { payload }) => {
    if (payload === null) { return; }
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
};

export const slice = createSlice({
  name: 'filters',
  initialState: INITIAL_STATE,
  reducers,
});

export const { actionTextFilter, actionFilteredData, actionMealOrDrink, actionRadioFilter,
} = slice.actions;

export default slice.reducer;
