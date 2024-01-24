import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import countReducer from "../slices/countSlice";
import nameReducer from "../slices/nameSlice";

const rootReducer = combineReducers({
    countSlice:countReducer,
    nameSlice:nameReducer
})

const store = configureStore({
    reducer:rootReducer
})

export default store