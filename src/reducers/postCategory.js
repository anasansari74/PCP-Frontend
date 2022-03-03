const postCategoryReducer = (state = "", action) => {
  switch (action.type) {
    case "selectCategory":
      return (state = action.payload);
    default:
      return state;
  }
};

export default postCategoryReducer;
