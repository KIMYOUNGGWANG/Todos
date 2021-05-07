import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { Provider } from "react-redux";
import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import rootReducer from "./modules";
import loggerMiddleware from "./lib/loggerMiddleware"
import {createLogger} from "redux-logger";
import ReduxThunk from 'redux-thunk';
import{configureStore} from '@reduxjs/toolkit'
const logger = createLogger();
// const store = createStore(rootReducer, applyMiddleware(logger,ReduxThunk));
const store = configureStore({
  reducer : rootReducer, 
  });
// const store = createStore(rootReducer, composeWithDevTools());
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

