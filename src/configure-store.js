import { configureStore } from "@reduxjs/toolkit";
import textReducer from "./reducer"

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