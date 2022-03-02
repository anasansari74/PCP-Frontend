// const createSlice = require("@reduxjs/toolkit").createSlice;

// export const textSlice = createSlice({
//   name: "text",
//   initialState: {
//     value: "Press the button below to generate a new quote",
//   },
//   reducers: {
//     changeQuote: (state, action) => {
//       state.value = action.payload;
//     },
//   },
// });

// export const { changeQuote } = textSlice.actions;

// export default textSlice.reducer;

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
