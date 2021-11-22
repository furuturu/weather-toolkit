import { NavLink } from "react-router-dom";

export const NotFound = () => {
  return (
    <NavLink to={"/"}>
      <div>Not Found</div>
    </NavLink>
  );
};
