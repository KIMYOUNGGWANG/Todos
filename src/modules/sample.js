import { handleActions } from 'redux-actions';
import * as api from '../lib/api'
import createRequestThunk from '../lib/createRequestThunk'
const GET_POST = 'sample/GET_POST'
const GET_POST_SUCCESS = 'sample/GET_POST_SUCCESS';
const GET_POST_FAIL = 'sample/GET_POST_FAIL';

const GET_USERS = 'sample/GET_USERS';
const GET_USERS_SUCCESS = 'sample/GET_USERS_SUCCESS';
const GET_USERS_FAIL = 'sample/GET_USERS_FAIL';

// export const getPosts = id => async dispatch =>{
//     dispatch({type:GET_POST});
//     try{
//         const post = await api.getPosts(id)
//         dispatch({
//             type:GET_POST_SUCCESS,
//             payload : post.data       
//         });
//     } catch(e){
//         dispatch({
//             type:GET_POST_FAIL,
//             payload : e,
//             error : true
//         });
//         throw e;
//     }
// }

// export const getUsers = () => async dispatch =>{
//     dispatch({type:GET_USERS})
//     try{
//         const response = await api.getUsers();
//         dispatch({
//             type:GET_USERS_SUCCESS,
//             payload : response.data
//         })
//     }
//     catch(e){
//         dispatch({
//             type:GET_USERS_FAIL,
//             payload:e,
//             error : true
//         });
//         throw e
//     }
// }

export const getPosts = createRequestThunk(GET_POST,api.getPosts);
export const getUsers = createRequestThunk(GET_USERS, api.getUsers)

const initialState = {
    loading:{
        GET_POST : false,
        GET_USERS : false,
    },
    post : null,
    users: null
}


// export default function sample(state= initialState , action) {
//     switch(action.type) {
//         case GET_POST_SUCCESS : 
//         return 
//     }
// }
const sample = handleActions(
   {   
       [GET_POST_SUCCESS]: (state,action) =>({
            ...state,
            post : action.payload
       }),
       
       
       [GET_USERS_SUCCESS] : (state, action) => ({
           ...state,
           users : action.payload
       }),
    
   },
   initialState
)

export default sample