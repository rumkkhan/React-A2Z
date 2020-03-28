import React from 'react';
import logo from './logo.svg';
import './App.css';
import Box from './components/Box';
import SearchBar from './components/secondProject/SearchBar';





class  App extends React.Component {
 


    render() {
    return(
      <div className="ui container">
        <SearchBar />
      </div>      
    ) 
};
}
 export default App; 
