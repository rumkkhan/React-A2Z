import React from 'react';
import logo from './logo.svg';
import './App.css';
import Box from './components/Box'

function App() {
  return (
    <div className="ui container comments">
     {/* <Box /> */}
           <div className="comment">
              <a href="/" className="avatar">
                <img alt="avatar" />
             </a>
             <div className="content">
               <a href="/" className="author">Ramzan</a>

               <div className="metadata">
                 <span className="date">Today at 6:00PM</span>
               </div>
               <div className="text">
                  Nice blog post!
               </div>
             </div>
           </div>
    </div>
  );
}

export default App;
