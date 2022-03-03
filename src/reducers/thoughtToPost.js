const postThoughtReducer = (state = "", action) => {
  switch (action.type) {
    case "thoughtToPost":
      return (state = action.payload);
    default:
      return state;
  }
};

export default postThoughtReducer;
