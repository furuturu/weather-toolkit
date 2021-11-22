import axios from "axios";
const APIKEY = process.env.REACT_APP_API_KEY; //7301e1685d8a38abdf7aaec9131a3033
export const fetchWeatherByCity = (city) => {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${APIKEY}&units=metric`
  );
};
export const fetchWeatherByCoord = ({ lat, lon }) => {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&exclude=minutely,alerts&appid=${APIKEY}&units=metric`
  );
};
export const fetchWeatherByLocation = ({ lat, lon }) => {
  return axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${APIKEY}&units=metric`
  );
};
