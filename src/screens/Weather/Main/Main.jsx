import React from "react";
import { Search } from "../Search";
import {
  selectError,
  selectForecastData,
} from "../../../store/Forecast/selectors";
import { ForecastDashboard } from "../ForecastDashboard";
import { Loader } from "../../../components";
import { LocationMap } from "../LocationMap";
import { selectLoad } from "../../../store/Forecast/selectors";
import { useSelector } from "react-redux";
import { Error } from "../../../components";

export const Main = () => {
  const forecast = useSelector(selectForecastData);
  const error = useSelector(selectError);
  const loading = useSelector(selectLoad);

  return (
    <>
      <Search />
      {loading && <Loader />}
      {error && <Error />}
      {!error && !loading && forecast && (
        <>
          <ForecastDashboard />
        </>
      )}
      <LocationMap />
    </>
  );
};
