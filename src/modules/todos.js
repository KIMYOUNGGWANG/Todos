// import { createAction } from "@reduxjs/toolkit";
// import { createAction,handleActions } from "redux-actions";
import {createAction, createReducer, createSlice, nanoid} from '@reduxjs/toolkit';
const ADD_TODO = "todos/ADD_TODO";
const TOGGLE_TODO = "todos/TOGGLE_TODO";
const REMOVE_TODO = "todos/REMOVE_TODO";
let nextId = 1;

const initialState = []

const todosSlice = createSlice({
  name :'todos',
   initialState,
   reducers : {
     addTodo : {
       reducer : (state, action) => {
         state.push(action.payload)
       },

       prepare : (text) => ({
          payload : {id : nextId++ , text, done : false}
       })
     },
     removeTodo: (state, action) => {
         state.splice(
         state.findIndex(todo => todo.id === action.payload.id),1)
       },

     toggleTodo : {
       reducer : (state, action) => {
       const todo =  state.find(todo => todo.id === action.payload)
       todo.done = !todo.done
       },

     prepare : (id) => ({payload :id})
   },
  }
})
// export const addTodo = text => ({
//   type: ADD_TODO,
//   todo: {
//     id: nextId++,
//     text,
//     done: false,
//   },
// });
// export const addTodo = createAction(ADD_TODO, text=>({
//   id:nextId++,
//   text,
//   done:false,
// }));


// export const toggleTodo = id => ({
//   type: TOGGLE_TODO,
//   id,
// });

// export const toggleTodo = createAction(TOGGLE_TODO, id=>id);


// export const removeTodo = id => ({
//   type: REMOVE_TODO,
//   id,
// });

// export const removeTodo = createAction(REMOVE_TODO,id=>id)


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


// const todos = handleActions(
//   {
//     [ADD_TODO] : (state,{payload : todo}) => (
//       state.concat(todo)
//     ),
//     [TOGGLE_TODO] : (state,{payload : id}) => (
    
//      state.map(todo=>todo.id === id ? {...todo, done:!todo.done} : todo,
//         )
//       ),
//     [REMOVE_TODO] : (state,{payload:id}) => (
//        state.filter(todo=>todo.id !== id)
//     )
//   },
//   initialState
// );

// const todos =   createReducer(initialState,(builder)=>{
//   builder
//   .addCase(addTodo, (state, action) => {
//     state.concat(action.payload)
//   })
//   .addCase(removeTodo, (state,action)=>{
//     state.filter(todo => todo.id !== action.payload)
//   })

//   .addCase(toggleTodo, (state, action) => {
//     state.map(todo => todo.id === action.payload ? {...todo, done :!todo.done} : todo)
//   } )
// })

export const {addTodo, toggleTodo, removeTodo} = todosSlice.actions;
export default todosSlice;
// export default todos