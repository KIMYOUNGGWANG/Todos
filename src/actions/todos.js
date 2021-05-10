// 비동기 처리는actions에서 동기처리는 reducers에서 처리

import { createAsyncThunk } from "@reduxjs/toolkit"
const delay =(time, value)=> new Promise((resolve,reject) => {
    setTimeout(()=>{
        resolve(value)
    },time);
});

let nextId = 1;
export const addTodoAsync = createAsyncThunk('ADD_TODO', async(data) => {
    console.log(data)
    const result = await delay(500, {
        id : nextId++,
        text : data,
        done : false,
    });
    return result;
});

