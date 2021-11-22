import { useEffect, useMemo, useState } from "react";
import { Map, Marker } from "pigeon-maps";
import { useDispatch, useSelector } from "react-redux";
import { startLocationSaga } from "../../../store/Forecast/actions";
import { selectCoord } from "../../../store/Forecast/selectors";
import { showLoader } from "../../../store/Forecast/slice";

export const LocationMap = () => {
  const [center, setCenter] = useState(null);
  const dispatch = useDispatch();
  const city = localStorage.getItem("city");
  console.log();
  if (center === null && !city) {
    const geoSuccess = (position) => {
      dispatch(showLoader(true));
      dispatch(
        startLocationSaga({
          lat: position.coords.latitude,
          lon: position.coords.longitude,
        })
      );
    };
    navigator.geolocation.getCurrentPosition(geoSuccess);
  }
  //в карту из стейта
  const coord = useSelector(selectCoord);
  const coordArray = useMemo(() => [coord.lat, coord.lon], [coord]);
  useEffect(() => {
    setCenter(coordArray);
  }, [coordArray]);
  //с карты в стейт
  const onClickHandler = (event) => {
    setCenter(event.latLng);
    const coordinates = {
      lat: event.latLng[0],
      lon: event.latLng[1],
    };
    dispatch(showLoader(true));
    dispatch(startLocationSaga(coordinates));
  };

  return (
    <Map height={300} onClick={onClickHandler} defaultZoom={11} center={center}>
      <Marker width={50} anchor={center} />
    </Map>
  );
};
