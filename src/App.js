import React from 'react';
import logo from './logo.svg';
import './App.css';
import Box from './components/Box'
import CommentDetails from './components/firstProject/CommentDetail'
import ApprovalCard from './components/firstProject/ApprovalCard'
import SeasonDisplay from './components/secondProject/SeasonDisplay'




class  App extends React.Component {
 
  constructor(props) {
    super(props)
    this.state = {lat:null,errorMessage:''}
    window.navigator.geolocation.getCurrentPosition(
      position => {
        this.setState({lat: position.coords.latitude})
      },
      err =>{
        this.setState({errorMessage:err.message})
      }
    )
  }

componentDidMount() {
  console.log('My component was rendered  to the screen');
  
}
componentDidUpdate() {
  console.log('mY component was  just updated - it rendered!')
}





  render() {

   if(this.state.errorMessage && !this.state.lat){
      return <div>Error:{this.state.errorMessage}</div>
   }
   if(!this.state.errorMessage && this.state.lat)
       return <div>Latitude: {this.state.lat}</div>
    
       return <div>Loading !</div>
};
}
 export default App; 
     /* <Box /> */
{/* <ApprovalCard > 
     <CommentDetails  Auther="Muhammad"/>
     </ApprovalCard> */}