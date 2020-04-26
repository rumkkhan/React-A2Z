import { combineReducers } from 'redux';
import commentsReducer from '../4_Test_Project/CommentReducer';


export default combineReducers({
    comments: commentsReducer
})