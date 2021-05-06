// import { createAction } from "@reduxjs/toolkit";
import { createAction,handleActions } from "redux-actions";

const ADD_TODO = "todos/ADD_TODO";
const TOGGLE_TODO = "todos/TOGGLE_TODO";
const REMOVE_TODO = "todos/REMOVE_TODO";

// export const addTodo = text => ({
//   type: ADD_TODO,
//   todo: {
//     id: nextId++,
//     text,
//     done: false,
//   },
// });
let nextId = 1;
export const addTodo = createAction(ADD_TODO, text=>({
  id:nextId++,
  text,
  done:false,
}));


// export const toggleTodo = id => ({
//   type: TOGGLE_TODO,
//   id,
// });

export const toggleTodo = createAction(TOGGLE_TODO, id=>id);


// export const removeTodo = id => ({
//   type: REMOVE_TODO,
//   id,
// });

export const removeTodo = createAction(REMOVE_TODO,id=>id)

const initialState = []

// export default function todos(state = initialState, action) {
//   switch (action.type) {
//     case ADD_TODO:
//       return state.concat(action.todo);

//     case TOGGLE_TODO:
//       return state.map(todo =>
//         todo.id === action.id ? { ...todo, done: !todo.done } : todo
//       );

//     case REMOVE_TODO:
//       return state.filter(todo => todo.id !== action.id);
//     default:
//       return state;
//   }
// }


const todos = handleActions(
  {
    [ADD_TODO] : (state,{payload : todo}) => (
      state.concat(todo)
    ),
    [TOGGLE_TODO] : (state,{payload : id}) => (
    
     state.map(todo=>todo.id === id ? {...todo, done:!todo.done} : todo,
        )
      ),
    [REMOVE_TODO] : (state,{payload:id}) => (
       state.filter(todo=>todo.id !== id)
    )
  },
  initialState
);

export default todos