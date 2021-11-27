import { DayContainer, ForecastWrapper } from "./ForecastDashboard.styles";
import { useSelector } from "react-redux";
import { selectForecastData } from "../../../store/Forecast/selectors";
import { getIcon, unixToDay, averageTemp } from "../../../utils";
import { useState } from "react";
import { SelectedDay } from "../SelectedDay";
export const ForecastDashboard = () => {
  const forecast = useSelector(selectForecastData)?.daily.slice(0, 5);
  const [selectedDay, setSelectedDay] = useState(0);
  const selectDayHandler = (index) => {
    setSelectedDay(index);
  };
  return (
    <>
      <SelectedDay index={selectedDay} />
      <ForecastWrapper>
        {forecast &&
          forecast.map((day, index) => (
            <DayContainer
              selected={selectedDay}
              index={index}
              key={day.dt}
              onClick={() => selectDayHandler(index)}
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
//разделяю массив объектов daily из апишки, где каждый объект - данные на день. в хуке индексы этих объектов в массиве,
//по умолчанию 0 (сегодня). при клике на день, хук меняется на индекс массива, индекс передается в SelectedDay и там
//выводятся данные из массива daily по переданному индексу + меняется фон дня по переданным в контейнер пропсам
