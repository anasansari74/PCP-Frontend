// const createSlice = require("@reduxjs/toolkit").createSlice;

// export const categorySlice = createSlice({
//   name: "category",
//   initialState: {
//     value: "",
//     type: String,
//   },
//   reducers: {
//     postCate: (state, action) => {
//       state.value = action.payload;
//     },
//   },
// });

// export const { selectedCategory } = categorySlice.actions;

// export default categorySlice.reducer;

import reducer from "./reducers/postCategory";
import * as actions from "./actions";
import expect from "expect";

describe("getThought reducer", () => {
    it("should return the initial state", () => {
      expect(reducer(undefined, {})).toEqual(
        "Press the button below to generate a new quote"
      );
    });


