import { configureStore } from "@reduxjs/toolkit";
import textReducer from "./reducers/getThought"

export default configureStore(
    {
        reducer : {
            text : textReducer
        }
    }
)
// import setQuote from "./reducer"

// let store = createStore(setQuote)

// export default store