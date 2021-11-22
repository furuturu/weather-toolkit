export const unixToDate = (unix) => {
  return new Date(unix * 1000).toLocaleString("en-GB", {
    year: "numeric",
    month: "numeric",
    day: "numeric",
    weekday: "long",
  });
};
