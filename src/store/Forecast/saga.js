import { takeLatest, put, call } from "redux-saga/effects";
import { saveCity, saveForecastToState, showError, showLoader } from "./slice";
import {
  fetchWeatherByCity,
  fetchWeatherByCoord,
  fetchWeatherByLocation,
} from "../../services";
import { FETCH_CURRENT, FETCH_CURRENT_MAP } from "./actions";

function* forecastWorker(action) {
  try {
    yield put(showError(false));
    const currentDataFromApi = yield call(fetchWeatherByCity, action.payload);
    console.log(currentDataFromApi);
    yield put(
      saveCity({
        name: currentDataFromApi.data.name,
        country: currentDataFromApi.data.sys.country,
        coord: currentDataFromApi.data.coord,
      })
    );
    localStorage.setItem("city", currentDataFromApi.data.name);
    const weekForecastDataFromApi = yield call(
      fetchWeatherByCoord,
      currentDataFromApi.data.coord
    );
    console.log(weekForecastDataFromApi.data);
    yield put(saveForecastToState(weekForecastDataFromApi.data));
  } catch (e) {
    yield put(showError(true));
    console.log("все сломалось нахуй");
  } finally {
    yield put(showLoader(false));
  }
}
export function* forecastWatcher() {
  yield takeLatest(FETCH_CURRENT, forecastWorker);
}
//то же самое, только первый запрос на основе координат
export function* locationWorker(action) {
  try {
    yield put(showError(false));
    const currentDataFromApi = yield call(
      fetchWeatherByLocation,
      action.payload
    );
    console.log(currentDataFromApi.data);
    yield put(
      saveCity({
        name: currentDataFromApi.data.name,
        country: currentDataFromApi.data.sys.country,
        coord: currentDataFromApi.data.coord,
      })
    );
    localStorage.setItem("city", currentDataFromApi.data.name);
    const ForecastDataFromApi = yield call(
      fetchWeatherByCoord,
      currentDataFromApi.data.coord
    );
    console.log(ForecastDataFromApi.data);
    yield put(saveForecastToState(ForecastDataFromApi.data));
  } catch (e) {
    yield put(showError(true));
    console.log("все сломалось нахуй");
  } finally {
    yield put(showLoader(false));
  }
}
export function* locationWatcher() {
  yield takeLatest(FETCH_CURRENT_MAP, locationWorker);
}
