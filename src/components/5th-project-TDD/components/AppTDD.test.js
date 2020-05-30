import React from 'react';
import { shallow } from 'enzyme';
import AppTDD from '../AppTDD'

    
describe('App', () => {
    const app = shallow(<AppTDD />);
    it('renders correctly', () => {
        expect(app).toMatchSnapshot();
    })
    it('initializes the `state` with an empty list of gifts',() => {        
        expect(app.state().gifts).toEqual([])
    })
    describe('when clicking `Add-gift` Button', () =>{
        const id = 1;
            beforeEach(() => {
            app.find('.btn-add').simulate('click');
            })
            afterEach(() => {
                app.setState({gifts: []})
            })
        it('adds a new gift is `state` ',() =>{
        
            expect(app.state().gifts).toEqual([{id: id}])
        })
        
        it('adds a new gifts  to the rendered   ', () => {        
            expect(app.find('.gift-list').children().length).toEqual(1);
        })
        it('creates a git component', () => {
            expect(app.find('Gift').exists()).toBe(true)
        })  
        describe('and user want to remove the added gift',() => {
            beforeEach(() => {
                 app.instance().removeGift(id);
            })

            it('removes the gift from state', () => {
                expect(app.state().gifts).toEqual([]);
            })
        })
    })
})
