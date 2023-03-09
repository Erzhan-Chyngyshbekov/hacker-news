export const getDate = (date?: number) => {
  if (!date) {
    return;
  }
  return new Date(date * 1000).toLocaleString();
};
