

const initialState={
    result:0
}




export default function reducer(state=initialState , action){
    if(action.type === 'INCREMENT'){
        return {...state, result: action.payload + action.payload2}
    }
    else if(action.type === "DECREMENT"){
        return {...state, result: action.payload - action.payload2}
    }
    else if(action.type === "MULTI"){
        return {...state, result: action.payload * action.payload2}
    }
    else if (action.type === "DIV"){
        return {...state, result: action.payload / action.payload2}
    }
    else if (action.payload === ''){
        alert("null")
    }

    return state
}
