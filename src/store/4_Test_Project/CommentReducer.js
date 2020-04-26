import {SAVE_COMMENT} from './types';


const commentReducer = (state = [], action) => {
    debugger
    switch(action.type){
        case SAVE_COMMENT:
            const newstate = [...state, action.payload]
            debugger
            return newstate
        default:
            return state;
    }
}
export default commentReducer;