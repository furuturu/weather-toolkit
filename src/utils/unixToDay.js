export const unixToDay = (unix) => {
  return new Date(unix * 1000).toLocaleString("en-US", { weekday: "long" });
};
