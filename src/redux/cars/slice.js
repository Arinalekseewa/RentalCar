import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from '../cars/operations';
import { createSelector } from '@reduxjs/toolkit';
import { selectBrandFilter } from '../filters/slice';
import { selectCars } from "./selectors";

// const initialState = [];

const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        items: [],
        isLoading: false,
        error: null,
    },
    reducers: {},

    extraReducers: builder => {
        builder
            .addCase(fetchCars.pending, state => {
                state.isLoading = true;
                state.error = null;
            })
            .addCase(fetchCars.fulfilled, (state, action) => {
                state.isLoading = false;
                state.items = action.payload.cars;
            })
            .addCase(fetchCars.rejected, (state, action) => {
                state.isLoading = false;
                state.error = action.payload;
            });
    },
});

export const selectFilteredCars = createSelector(
  [selectCars, selectBrandFilter],
  (cars, filter) => {
    return cars.filter(car =>
      car.brand.toLowerCase() ||
      car.model.toLowerCase()
    );
  }
);

export default carsSlice.reducer;