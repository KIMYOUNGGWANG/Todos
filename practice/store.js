import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import {rootReducer} from "./reducers/index";

const store = configureStore({
    reducer:rootReducer,
    devTools:true,
    middleware:getDefaultMiddleware()
})