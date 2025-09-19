import { createSlice } from '@reduxjs/toolkit';
import { fetchBrands } from '../filters/operations';
// import { selectCars } from "../cars/selectors";

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    brands: [],
    filtered: [],
  },
  reducers: {
    setFilteredCars(state, action) {
      state.filtered = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchBrands.fulfilled, (state, action) => {
      state.brands = action.payload;
    });
  },
});

export const { setFilteredCars } = filtersSlice.actions;

export const selectFilteredCars = (state) => state.filters.filtered;
export const selectBrands = (state) => state.filters.brands || [];

export default filtersSlice.reducer;
