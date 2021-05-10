import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./reducers/index";
import loggerMiddleware from "./lib/loggerMiddleware"
import {createLogger} from "redux-logger";
import ReduxThunk from 'redux-thunk';
import{configureStore, getDefaultMiddleware} from '@reduxjs/toolkit'
const logger = createLogger();
// const store = createStore(rootReducer, applyMiddleware(logger,ReduxThunk));
const thunkMiddleware = (store)=>(dispatch)=>(action)=>{
  if(typeof action ==='function') {
    return action(store.dispatch, store.getState)
  }
  return dispatch(action)
}
const store = configureStore({
  reducer : rootReducer, 
  middleware : getDefaultMiddleware(),
  devTools : process.env.NODE_ENV !=='production'
  });
// const store = createStore(rootReducer, composeWithDevTools());
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

