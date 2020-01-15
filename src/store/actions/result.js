import * as actionTypes from "./actionTypes"

export const saveResult = (counter) => ({ type: actionTypes.STORE_RESULT, counter })

export const storeResult = result => {
    return (dispatch, getState) => {
        console.log("OLD: ", getState().ctr.counter)
        setTimeout(() => {
            dispatch(saveResult(result));
        }, 2000)
    }
}

export const deleteResult = (resultId) => ({ type: actionTypes.DELETE_RESULT, resultId })
