import {SAVE_COMMENT, FETCH_COMMENTS} from './types';


const commentReducer = (state = [], action) => {
    debugger
    switch(action.type){
        case SAVE_COMMENT:
            const newstate = [...state, action.payload]
            debugger
            return newstate
        case FETCH_COMMENTS:
            const comments = action.payload.data.map(comment => comment.name);
            return [...state,...comments];    
        default:
            return state;
    }
}
export default commentReducer;