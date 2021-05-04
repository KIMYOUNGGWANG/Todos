import { combineReducers } from "redux";
import todos from "./todos";
import sample from './sample';

const rootReducer = combineReducers({
  todos,
  sample
});

export default rootReducer;
