import commentsReducer from '../CommentReducer';
import {SAVE_COMMENT} from '../types';


it('handles actions to type SAVE_COMMENT', () => {
    const action = {
        type: SAVE_COMMENT,
        payload: 'New Comment'
    };

    const newState = commentsReducer([], action);

    expect(newState).toEqual(["New Comment"]);
})


it('handles action with unknown type', () => {
    const newState = commentsReducer([], {type: 'abcdef'
  })
  expect(newState).toEqual([])
})