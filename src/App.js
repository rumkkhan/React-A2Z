import React from 'react';
import logo from './logo.svg';
import './App.css';
import Box from './components/Box';
import MainPage from './components/secondProject/';
import ThirdApp from './components/ThirdProject/index'
import ReduxIndex from './components/ReactRedux/Index';
import TestComponent from './components/ForthProjectTest';
import AppTDD from './components/5th-project-TDD/AppTDD';
import Root from './Root';





class  App extends React.Component {
 


    render() {
    return(
      <Root>
          <div className="ui container">
         
                  {/* <MainPage /> */}
                  {/* <ThirdApp /> */}
                  {/* <ReduxIndex /> */}
                  {/* <TestComponent /> */}
                  <AppTDD />
                </div> 
      </Root>
          
    ) 
};
}
 export default App; 
