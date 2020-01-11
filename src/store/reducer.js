const initState = {
    counter: 0,
    result: []
}

const reducer = (state = initState, action) => {
    switch(action.type){
        case "INCREMENT": return {
            ...state,
            counter: state.counter + 1
        }
        case "DECREMENT": return {
            ...state,
            counter: state.counter - 1
        }
        case "ADD": return {
            ...state,
            counter: state.counter + action.value
        }
        case "SUB": return {
            ...state,
            counter: state.counter - action.value
        }
        case "STORE_RESULT": return {
            ...state,
            result: state.result.concat({id: new Date() ,value: state.counter})
        }
        case "DELETE_RESULT": return {
            ...state,
            result: state.result.filter(resultElement => resultElement.id !== action.resultId)
        }
    }
    return state
}

export default reducer