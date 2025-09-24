import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from '../cars/operations';
import { fetchCarById } from '../cars/operations';

const initialState = {
  items: [],
  filtered: [],
  favourites: [],
  selectedBrand: "",
  selectedPrice: null,
  isLoading: false,
  error: null,
  carById: {},
};

const carsSlice = createSlice({
  name: 'cars',
  initialState,
  reducers: {
    setBrandFilter(state, action) {
      state.selectedBrand = action.payload;
    },
    setFilteredCars(state, action) {
      state.filtered = action.payload;
    },
    toggleFavourite(state, action) { 
      const carId = action.payload;
      if (state.favourites.includes(carId)) {
        state.favourites = state.favourites.filter(id => id !== carId);
      } else {
        state.favourites.push(carId);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      // fetchCars
      .addCase(fetchCars.pending, (state) => {
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
      })

      // fetchCarById
      .addCase(fetchCarById.pending, (state) => {
        state.isLoading = true;
        state.error = null;
      })
      .addCase(fetchCarById.fulfilled, (state, action) => {
        state.isLoading = false;
        state.carById[action.payload.id] = action.payload;
      })
      .addCase(fetchCarById.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const { setBrandFilter, setFilteredCars, toggleFavourite } = carsSlice.actions;
export default carsSlice.reducer;