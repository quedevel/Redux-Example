

const initState = { count: 0 }

function countReducer(state = initState, action) {

    if(action.type === 'PLUS'){
        return {count: state.count+1}
    }else if(action.type === 'MINUS'){
        return {count: state.count-1}
    }
    return state
}

export default countReducer
