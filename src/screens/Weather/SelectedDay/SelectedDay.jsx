import {
  Description,
  Temperature,
  Wrapper,
  Location,
  Icon,
  Border,
  ChartWrapper,
} from "./SelectedDay.styles";
import {
  selectCity,
  selectForecastData,
} from "../../../store/Forecast/selectors";
import { useSelector } from "react-redux";
import { averageTemp, getIcon, unixToDate } from "../../../utils";
import { useState } from "react";
import { Chart } from "../Chart";

export const SelectedDay = ({ index }) => {
  const data = useSelector(selectForecastData)?.daily;
  const city = useSelector(selectCity);
  const [changeView, setChangeView] = useState(true);
  return (
    <div>
      {changeView ? (
        <Wrapper onClick={() => setChangeView(false)}>
          <Location>
            {city.name}, {city.country} <br />
            Forecast for the {unixToDate(data[index].dt)}
          </Location>
          <div className="content">
            <Temperature>
              {averageTemp([data[index].temp.max, data[index].temp.min])}°
            </Temperature>
            <Icon>
              <img
                src={getIcon(data[index].weather[0].icon)}
                alt={data[index].weather[0].description}
              />
            </Icon>
          </div>
          <Description>
            <b>Feels like {Math.round(data[index].feels_like.day)}</b>
            <br />
            {data[index].weather[0].description}, humidity:{" "}
            {data[index].humidity}%, wind speed:{" "}
            {Math.round(data[index].wind_speed)}m/s
          </Description>
        </Wrapper>
      ) : (
        <ChartWrapper onClick={() => setChangeView(true)}>
          <Chart />
        </ChartWrapper>
      )}
      <Border />
    </div>
  );
};
