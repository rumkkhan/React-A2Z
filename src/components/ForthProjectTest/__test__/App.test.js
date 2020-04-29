import React from 'react';
import {shallow} from 'enzyme';
import App from '../index';
import CommentBox from '../CommentBox';
import CommentList from '../CommentList';

let wrapper;

beforeEach(() => {
    wrapper = shallow(<App />);
})

it('show the CommentBox', () => {
    expect(wrapper.find(CommentBox).length).toEqual(1);
})

it('show the commentList', () => {
    expect(wrapper.find(CommentList).length).toEqual(1)
})
























// let  component;

// beforeEach(() => {
//     component = shallow(<App />);
// });


// it('shows a comment box ', ()  => {
//       expect(component.find(CommentBox).length).toEqual(1);
// });

// it('shows a comment list', () => {
//     expect(component.find(CommentList).length).toEqual(1);
// })