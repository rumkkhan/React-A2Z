import React from 'react';
import {Provider} from 'react-redux';
import { createStore } from  'redux';
import reducers from './store/4_Test_Project/';


export default ({children,initialState = {}}) => {
    return (
        <Provider store={createStore(reducers,initialState)}>
            {children}
        </Provider>
    )
}