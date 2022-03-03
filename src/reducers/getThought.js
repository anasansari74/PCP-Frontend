const getThoughtReducer = (
  state = "Press the button below to generate a new quote",
  action
) => {
  switch (action.type) {
    case "changeQuote":
      return (state = action.payload);
    default:
      return state;
  }
};

export default getThoughtReducer;
