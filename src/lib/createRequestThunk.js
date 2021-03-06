import {startLoading, finishLoading} from "../modules/loading"

export default function createRequestThunk(type, request) {
    const SUCCESS = `${type}_SUCCESS`
    const FAIL = `${type}_FAIL`
    return params => async dispatch => {
        dispatch({type})
        dispatch(startLoading(type))
        try{
            const res = await request(params)
            dispatch({
                type : SUCCESS,
                payload : res.data
            });
            dispatch(finishLoading(type))
        } catch(e) {
            dispatch({
                type : FAIL,
                payload : e,
                error : true
            })
            throw e
        }
    }
}