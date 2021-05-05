import { combineReducers } from "redux";
import todos from "./todos";
import sample from './sample';
import loading from './loading'
const rootReducer = combineReducers({
  todos,
  sample,
  loading
});

export default rootReducer;
