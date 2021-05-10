import { combineReducers } from "redux";
import todosSlice from "../reducers/todos";

const rootReducer = combineReducers({
    todos :todosSlice.reducer,
  });
  
  export default rootReducer;
  