import getThoughtReducer from "./getThought";
import selectedCategoryReducer from "./selectedCategory";
import postCategoryReducer from "./postCategory";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  getThought: getThoughtReducer,
  selectedCategory: selectedCategoryReducer,
  postCategory: postCategoryReducer,
});

export default allReducers;
