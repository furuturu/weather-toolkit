import { DayContainer, ForecastWrapper } from "./ForecastDashboard.styles";
import { useSelector } from "react-redux";
import { selectForecastData } from "../../../store/Forecast/selectors";
import {
  getIcon,
  unixToDay,
  unixToWeekIndex,
  averageTemp,
} from "../../../utils";
import { useState } from "react";
import { SelectedDay } from "../SelectedDay";
export const ForecastDashboard = () => {
  const forecast = useSelector(selectForecastData)?.daily.slice(0, 5);
  const [selectedDay, setSelectedDay] = useState(0);
  const selectDayHandler = (time) => {
    setSelectedDay(unixToWeekIndex(time));
  };
  return (
    <>
      <SelectedDay index={selectedDay} />
      <ForecastWrapper>
        {forecast &&
          forecast.map((day) => (
            <DayContainer
              selected={selectedDay}
              index={unixToWeekIndex(day.dt)}
              key={day.dt}
              onClick={() => selectDayHandler(day.dt)}
            >
              <div>{unixToDay(day.dt)}</div>
              <img src={getIcon(day.weather[0].icon)} alt={""} />
              <div>{averageTemp([day.temp.max, day.temp.min])}°</div>
            </DayContainer>
          ))}
      </ForecastWrapper>
    </>
  );
};
