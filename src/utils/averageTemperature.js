export const averageTemp = (temp) => {
  return Math.round(temp.reduce((min, max) => min + max) / 2);
};
