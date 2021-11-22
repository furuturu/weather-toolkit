import { forecastWatcher, locationWatcher } from "./Forecast/saga";
import { all } from "redux-saga/effects";

export function* rootSaga() {
  yield all([forecastWatcher(), locationWatcher()]);
}
