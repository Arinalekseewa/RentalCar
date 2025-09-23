import axios from 'axios';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { getCarByIdAPI } from "../../api/api";

axios.defaults.baseURL = 'https://car-rental-api.goit.global/';

export const fetchCars = createAsyncThunk(
    'cars/fetchAllCars',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get('/cars');
            return response.data;
        } catch (error) {
            return thunkAPI.rejectWithValue(error.message);
        }
    }
);

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

export const fetchCarById = createAsyncThunk(
    "cars/fetchCarById",
    async (carId, { rejectWithValue }) => {
        try {
            return await getCarByIdAPI(carId);
        } catch (error) {
            return rejectWithValue(error.response?.data || "Fetch car failed");
        }
    }
);