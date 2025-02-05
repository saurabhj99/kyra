export const abbreviateNumber = (value: number) => {
  const absValue = Math.abs(value);
  const sign = value < 0 ? "-": ""
  if (absValue >= 1e12) {
    return `${sign}${(absValue / 1e12).toFixed(2).replace(/\.00$/, "") + "T"}`;
  } else if (absValue >= 1e9) {
    return `${sign}${(absValue / 1e9).toFixed(2).replace(/\.00$/, "") + "B"}`;
  } else if (absValue >= 1e6) {
    return `${sign}${(absValue / 1e6).toFixed(2).replace(/\.00$/, "") + "M"}`;
  } else if (absValue >= 1e3) {
    return `${sign}${(absValue / 1e3).toFixed(2).replace(/\.00$/, "") + "K"}`;
  } else {
    return `${sign}${absValue.toString()}`;
  }
};
