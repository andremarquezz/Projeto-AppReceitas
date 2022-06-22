import { createSlice } from '@reduxjs/toolkit';

const INITIAL_STATE = {
  textFilter: '',
  mealOrDrink: 'meal',
  filteredData: [],
};

const reducers = {
  actionFilteredData: (state, { payload }) => {
    state.filteredData = payload;
  },
  actionTextFilter: (state, { payload }) => {
    state.textFilter = payload;
  },
};

export const slice = createSlice({
  name: 'filters',
  initialState: INITIAL_STATE,
  reducers,
});

export const { actionTextFilter, actionFilteredData } = slice.actions;

export default slice.reducer;
