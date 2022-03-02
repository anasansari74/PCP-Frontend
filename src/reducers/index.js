import getThoughtReducer from "./getThought";
import selectedCategoryReducer from "./selectedCategory";
import { combineReducers } from "redux";

const allReducers = combineReducers({
  getThought: getThoughtReducer,
  selectedCategory: selectedCategoryReducer,
});

export default allReducers;
