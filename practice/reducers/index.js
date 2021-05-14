import {reducerSlice} from './todos';
import {combineReducers} from 'react';

const rootReducer = combineReducers({
    todos :reducerSlice.reducer
})