import React from 'react';
import logo from './logo.svg';
import './App.css';
import Box from './components/Box';
import MainPage from './components/secondProject/';
import ThirdApp from './components/ThirdProject/index'





class  App extends React.Component {
 


    render() {
    return(
      <div className="ui container">
        {/* <MainPage /> */}
        <ThirdApp />
      </div>      
    ) 
};
}
 export default App; 
