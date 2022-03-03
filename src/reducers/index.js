import getThoughtReducer from "./getThought";
import selectedCategoryReducer from "./selectedCategory";
import postedCategoryReducer from "./postCategory";
import postThoughtReducer from "./thoughtToPost";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  getThought: getThoughtReducer,
  selectedCategory: selectedCategoryReducer,
  postedCategory: postedCategoryReducer,
  postThought: postThoughtReducer,
});

export default allReducers;
