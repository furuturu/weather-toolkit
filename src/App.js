import { Main } from "./screens/Weather/Main";
import { Route, Routes } from "react-router-dom";
import { NotFound } from "./screens/Error404/Error404";

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="*" element={<NotFound />} />
      {/*<Route path="/:cityName" element={<Main />} />*/}
    </Routes>
  );
};
// const { cityName } = useParams();
// const dispatch = useDispatch();
// if (cityName && cityFromRedux) {
//   console.log(cityName);
//   dispatch(requestCurrentForecast(cityName));
// }
