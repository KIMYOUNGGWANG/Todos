import {createSlice} from "@reduxjs/toolkit";

const initialState = [];

const reducerSlice = createSlice({
    name : "todos",
    initialState:{
        addTodoLoading : false,
        todos: []
    },
    reducers : {
        addTodo : (state,action) => {
            state.todos.push(action.payload)
        },
        toggleTodo : {
            reducer : (state, action) => {
            const todo =  state.todos.find(todo => todo.id === action.payload)
            todo.done = !todo.done
            },
          prepare : (id) => ({payload :id})
        },
        removeTodo : (state, action) =>{
            state.todos.splice(state.todos.findIndex(todo=>todo.id !==action.payload),1)
        }
    }
})

export const {addTodo, toggleTodo, removeTodo} = reducerSlice.actions;
export default reducerSlice;