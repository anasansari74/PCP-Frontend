export const changeQuote = data => {
  return {
    type: "changeQuote",
    payload: data,
  };
};

export const selectCategory = data => {
  return {
    type: "selectCategory",
    payload: data,
  };
};

export const postCategory = data => {
  return {
    type: "postCategory",
    payload: data,
  };
};

export const thoughtToPost = data => {
  return {
    type: "thoughtToPost",
    payload: data,
  };
};
