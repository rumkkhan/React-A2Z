import React from 'react';
import logo from './logo.svg';
import './App.css';
import Box from './components/Box';
import MainPage from './components/secondProject/';
import ThirdApp from './components/ThirdProject/index'
import ReduxIndex from './components/ReactRedux/Index';
import {Provider} from 'react-redux';
import {createStore} from  'redux';
import reducers from './components/ReactRedux/Reducer'




class  App extends React.Component {
 


    render() {
    return(
      <Provider  store={createStore(reducers)}>
          <div className="ui container">
                  {/* <MainPage /> */}
                  {/* <ThirdApp /> */}
                  <ReduxIndex />
                </div> 
      </Provider>
          
    ) 
};
}
 export default App; 
