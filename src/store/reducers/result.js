import * as actionTypes from "../actions/actionTypes"

const initState = {
    result: []
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case actionTypes.STORE_RESULT: return {
            ...state,
            result: state.result.concat({ id: new Date(), value: action.counter * 2 })
        }
        case actionTypes.DELETE_RESULT: return {
            ...state,
            result: state.result.filter(resultElement => resultElement.id !== action.resultId)
        }
    }
    return state
}

export default reducer