import {createSlice} from "@reduxjs/toolkit";
import {addTodoAsync} from "../actions/todos";
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
    },
    extraReducers : {
        [addTodoAsync.pending] : (state,action) => {
          state.addTodoLoading = true  
        },
        [addTodoAsync.fulfilled] : (state,action) => {
            state.todos.push(action.payload)
            state.addTodoLoading = false
        },
        [addTodoAsync.rejected] : (state, action) => {
            state.todos = action.payload
            state.addTodoLoading = false
        }
    }
})

export const {addTodo, toggleTodo, removeTodo} = reducerSlice.actions;
export default reducerSlice;