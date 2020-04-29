import React from 'react'
import { mount } from 'enzyme';
import CommentBox from '../CommentBox/';
import Root from '../../../Root';


let wrapped;
beforeEach(() => {
    wrapped = mount(<CommentBox />)
})

afterEach(() => {
    wrapped.unmount();
})

it('has a text  area and  a button',() => {
    expect(wrapped.find('textarea').length).toEqual(1);
    expect(wrapped.find('button').length).toEqual(1);
})

it('has  a text  area  that users can type in', () => {
    wrapped.find('textarea').simulate('change',{
        target: {valu}
    })
})



















// let wrapped;
// beforeEach(() => {
//     wrapped = mount(<Root><CommentBox /></Root>);
// })

// afterEach(() =>{
//     wrapped.unmount();
// })

// it('has a text area and button', () => {
//     expect(wrapped.find('textarea').length).toEqual(1);
//     expect(wrapped.find('button').length).toEqual(2);

// });


 
// describe('the text area', () => {
//     beforeEach(() => {
//         wrapped.find('textarea').simulate('change',{
//             target: {value: 'new comment'}
//         });
//         wrapped.update();
//     })
//     it('has a text area that users can type in', () => {
       
//         expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
//     });
//     it('when  form  is  submitted, text area gets emptied', () => {
//         wrapped.find('form').simulate('submit');
//         wrapped.update();
    
//         expect(wrapped.find('textarea').prop('value')).toEqual('');
//     })
// })


// it('has a text area that users can type in', () => {
//     wrapped.find('textarea').simulate('change',{
//         target: {value: 'new comment'}
//     });
//     wrapped.update();
//     expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
// });

// it('when  form  is  submitted, text area gets emptied', () => {
//     wrapped.find('textarea').simulate('change',{
//         target: {value: 'new comment'}
//     });
//     wrapped.update();
//     expect(wrapped.find('textarea').prop('value')).toEqual('new comment');
//     wrapped.find('form').simulate('submit');
//     wrapped.update();

//     expect(wrapped.find('textarea').prop('value')).toEqual('');
// })
