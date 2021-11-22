export const unixToWeekIndex = (unix) => {
  return new Date(new Date(unix * 1000).toLocaleString("en-US")).getDay() - 1;
};
