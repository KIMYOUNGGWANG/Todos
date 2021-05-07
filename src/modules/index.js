import { combineReducers } from "redux";
import todosSlice from "./todos";
import sample from './sample';
import loading from './loading'
const rootReducer = combineReducers({
  todos :todosSlice.reducer,
  sample,
  loading
});

export default rootReducer;
