import { ADD_TODO } from "./actionTypes";
const init={todos:[]}

export const reducer=(state=init,{type,payload})=>{

    switch(type){
    case ADD_TODO:
    return {
        ...state,
        todos:[...state.todos,payload]
    };
    default :
    return state

    }
}