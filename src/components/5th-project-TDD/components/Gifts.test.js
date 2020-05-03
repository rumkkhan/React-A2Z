import React from 'react';
import {shallow} from 'enzyme';
import Gift from '../Gift';


describe('Gift',() => {
        const gift = shallow(<Gift />);

    it('renders correctly',() => {
        expect(gift).toMatchSnapshot();
    });

    it('initializes state of Person and present', () =>{
        expect(gift.state()).toEqual({person: '', present: ''});
    })

    describe('when typing into the person intput', () => {
        const person = 'Uncle';
        beforeEach(() => {
               gift.find('.input-person').simulate('change',{
                   target:{value: person}
               })
        })
        it('updates the state of person', () => {
              expect(gift.state().person).toEqual(person)
        })
    })

    describe('when typing into the present input', () => {
        const present = 'watch';
        beforeEach(() => {
            gift.find('.input-present').simulate('change',{
                target:{value : present}
            })
        })

       it('updates the present input', () => {
        expect(gift.state().present).toEqual(present)
       })
    })
})