import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { SearchButton, SearchWrapper, TextField } from "./Search.styles";
import { requestCurrentForecast } from "../../../store/Forecast/actions";
import { showLoader } from "../../../store/Forecast/slice";
import { selectCity } from "../../../store/Forecast/selectors";

export const Search = () => {
  const [value, setValue] = useState("");
  const dispatch = useDispatch();
  const city = localStorage.getItem("city");
  const cityFromRedux = useSelector(selectCity).name;
  if (!cityFromRedux && city) {
    dispatch(requestCurrentForecast(city));
  }
  const handleOnChange = (event) => {
    setValue(event.target.value);
  };
  const handleOnSubmit = (event) => {
    event.preventDefault();
    if (value.trim()) {
      dispatch(showLoader(true));
      dispatch(requestCurrentForecast(value));
      setValue("");
    }
  };
  return (
    <SearchWrapper onSubmit={handleOnSubmit}>
      <TextField
        placeholder={"Enter your location"}
        onChange={handleOnChange}
        value={value}
      />
      <SearchButton type="submit">Search</SearchButton>
    </SearchWrapper>
  );
};
