import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';

axios.defaults.baseURL = 'https://car-rental-api.goit.global/';

export const fetchBrands = createAsyncThunk(
    'cars/fetchAllBrands',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/brands');
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);