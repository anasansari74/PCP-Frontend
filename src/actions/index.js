export const changeQuote = (string) => {
  return {
    type: "changeQuote",
    payload: string,
  };
};

export const selectCategory = (string) => {
  return {
    type: "selectCategory",
    payload: string,
  };
};
