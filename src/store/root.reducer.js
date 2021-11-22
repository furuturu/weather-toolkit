import { combineReducers } from "@reduxjs/toolkit";
import { forecastSlice } from "./Forecast/slice";

export const rootReducer = combineReducers({
  forecast: forecastSlice.reducer,
});
