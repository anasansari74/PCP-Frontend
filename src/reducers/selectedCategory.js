// const createSlice = require("@reduxjs/toolkit").createSlice;

// export const categorySlice = createSlice({
//   name: "category",
//   initialState: {
//     value: "Select the category you feel fits your thought best",
//     type: String,
//   },
//   reducers: {
//     selectedCategory: (state, action) => {
//       state.value = action.payload;
//     },
//   },
// });

// export const { selectedCategory } = categorySlice.actions;

// export default categorySlice.reducer;

const selectedCategoryReducer = (state = "Random", action) => {
  switch (action.type) {
    case "selectCategory":
      return (state = action.payload);
    default:
      return state;
  }
};

export default selectedCategoryReducer;
