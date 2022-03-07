const postedCategoryReducer = (state = "Random", action) => {
  switch (action.type) {
    case "postCategory":
      return (state = action.payload);
    default:
      return state;
  }
};

export default postedCategoryReducer;
