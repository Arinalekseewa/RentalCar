import { createSlice } from '@reduxjs/toolkit';
import { fetchBrands } from '../filters/operations';
import { createSelector } from '@reduxjs/toolkit';
import { selectCars } from "../cars/selectors";

const filtersSlice = createSlice({
  name: 'filters',
  initialState: {
    items: [], 
    filtered: [], 
  },
  reducers: {
    changeFilter(state, action) {
      state.brand = action.payload;
    },
    setBrandFilter(state, action) {
      state.selectedBrand = action.payload;
    },
    setFilteredCars(state, action) {
    state.filtered = action.payload;
  },
  },
  
  extraReducers: (builder) => {
        builder
            .addCase(fetchBrands.fulfilled, (state, action) => {
                state.brands = action.payload;
            });
    },
});

export const selectFilteredCars = createSelector(
  [selectCars, state => state.cars.selectedBrand],
  (cars, selectedBrand) => {
    if (!selectedBrand) return cars;
    return cars.filter(car => car.brand === selectedBrand);
  }
);

export const { changeFilter, setBrandFilter, setFilteredCars } = filtersSlice.actions;
export default filtersSlice.reducer;