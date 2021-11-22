import { createAction } from "@reduxjs/toolkit";

export const FETCH_CURRENT = "FETCH_CURRENT";
export const FETCH_CURRENT_MAP = "FETCH_CURRENT_MAP";
export const requestCurrentForecast = createAction(FETCH_CURRENT);
export const startLocationSaga = createAction(FETCH_CURRENT_MAP);
