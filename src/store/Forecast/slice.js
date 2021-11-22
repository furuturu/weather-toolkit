import { createSlice } from "@reduxjs/toolkit";

const initialForecast = {
  city: { name: null, country: null, coord: { lat: 55.75322, lon: 37.622513 } },
  Forecast: null,
  isLoading: false,
  error: false,
};
export const forecastSlice = createSlice({
  name: "weather",
  initialState: initialForecast,
  reducers: {
    showLoader(state, action) {
      state.isLoading = action.payload;
    },
    saveForecastToState(state, action) {
      state.isLoading = false;
      state.error = false;
      state.Forecast = action.payload;
    },
    showError(state, action) {
      state.error = action.payload;
    },
    saveCity(state, action) {
      state.city = action.payload;
    },
  },
});

export const { showLoader, showError, saveForecastToState, saveCity } =
  forecastSlice.actions;
