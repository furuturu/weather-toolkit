import { LineChart, Line, XAxis, YAxis, CartesianGrid, Legend } from "recharts";
import { useSelector } from "react-redux";
import { selectForecastData } from "../../../store/Forecast/selectors";

export const Chart = () => {
  const data = useSelector(selectForecastData)?.hourly;
  return (
    <LineChart width={600} height={300} data={data}>
      <Line
        type="monotone"
        name="Temperature for the next 48 hours"
        dataKey="temp"
        stroke="#004220"
      />
      <CartesianGrid stroke="#ccc" />
      <Legend verticalAlign="top" height={36} />
      <XAxis />
      <YAxis dataKey="temp" type="number" />
    </LineChart>
  );
};
