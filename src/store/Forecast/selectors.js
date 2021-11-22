export const selectCoord = (state) => state.forecast.city?.coord;
export const selectCity = (state) => state.forecast.city;
export const selectLoad = (state) => state.forecast.isLoading;
export const selectError = (state) => state.forecast.error;
export const selectForecastData = (state) => state.forecast.Forecast;
