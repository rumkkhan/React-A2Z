import commentsReducer from '../CommentReducer';
import {SAVE_COMMENT} from '../types';


it('handles  actions of type SAVE_COMMNET', () => {
    const action  = {
        type: SAVE_COMMENT,
        payload: 'New Comment'
    }
    const newState = commentsReducer([],action);

    expect(newState).toEqual(['New Comment']);
});

it('handles action with unknowntype', () => {

    const newState = commentsReducer([], {type: 'ABCDEF'});

    expect(newState).toEqual([])
});
