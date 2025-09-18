import { createSlice } from '@reduxjs/toolkit';

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    brand: '',
  },
  reducers: {
    changeFilter(state, action) {
      state.brand = action.payload;
    },
  },
});

export const selectBrandFilter = state => state.filters.brand;
export const { changeFilter } = filtersSlice.actions;
export default filtersSlice.reducer;