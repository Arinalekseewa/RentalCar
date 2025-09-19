import { createSlice } from '@reduxjs/toolkit';
import { fetchCars } from '../cars/operations';

const carsSlice = createSlice({
    name: 'cars',
    initialState: {
        items: [],
        filtered: [],
        selectedBrand: "",
        selectedPrice: null,
    },
  reducers: {
    setBrandFilter(state, action) {
      state.selectedBrand = action.payload;
    },
    setFilteredCars(state, action) {
    state.filtered = action.payload;
  }
    },

    extraReducers: (builder) => {
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
            })
    },
});

export default carsSlice.reducer;