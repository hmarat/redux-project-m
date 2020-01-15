import * as actionTypes from "../actions"

const initState = {
    result: []
}

const reducer = (state = initState, action) => {
    switch(action.type){
        case actionTypes.STORE_RESULT: return {
            ...state,
            result: state.result.concat({id: new Date() ,value: action.counter})
        }
        case actionTypes.DELETE_RESULT: return {
            ...state,
            result: state.result.filter(resultElement => resultElement.id !== action.resultId)
        }
    }
    return state
}

export default reducer