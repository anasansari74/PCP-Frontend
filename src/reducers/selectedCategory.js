const createSlice = require("@reduxjs/toolkit").createSlice;

export const categorySlice = createSlice({
  name: "category",
  initialState: {
    value: "Select the category you feel fits your thought best",
    type: String,
  },
  reducers: {
    selectedCategory: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { selectedCategory } = categorySlice.actions;

export default categorySlice.reducer;
