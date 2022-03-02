export const changeQuote = (string) => {
  return {
    type: "changeQuote",
    payload: string,
  };
};
