import React, { Component } from "react";
import ReactDOM from "react-dom";
import alasql from 'alasql'

class Box extends Component {
  constructor(props) {
    super(props);
    this.state = {
      allChecked: false,
      list: [
        { id: 1, name: "item1", isChecked: false },
        { id: 2, name: "item2", isChecked: false },
        { id: 3, name: "item3", isChecked: false }
      ]
    };
  }
  
  loadFile = (event) =>{
    alasql('SELECT * FROM FILE(?,{headers:true})',[event],function(data){
      data.sort(function(a, b){
       debugger
      });
    
    });
  }
  
 
  handleChange = e => {
    debugger
    let itemName = e.target.name;
    let checked = e.target.checked;
    this.setState(prevState => {
      let { list, allChecked } = prevState;
      if (itemName === "checkAll") {
        allChecked = checked;
        list = list.map(item => ({ ...item, isChecked: checked }));
      } else {
        debugger
        list = list.map(item =>
          item.name === itemName ? { ...item, isChecked: checked } : item
          
        );
        allChecked = list.every(item => item.isChecked);
      }
      return { list, allChecked };
    });
  };

  handleCheckBox = e => {
    debugger
    let value = e.target.checked
    let val = e.target.value
    let val1 = e.target.name
  }
  renderList = () => {
    return this.state.list.map(item => (
      <div>
        <input
          key={item.id}
          type="checkbox"
          name={item.name}
          value={item.name}
          checked={item.isChecked}
          onChange={this.handleChange}
        />
        <label>{item.name}</label>
      </div>
    ));
  };
  render() {
    return (
      <div>
        <input
          type="checkbox"
          name="checkAll"
          checked={this.state.allChecked}
          onChange={this.handleChange}
        />
        Check all
        <br />
        {this.renderList()}

<hr/>
<input 
    type="checkbox"
    name="check"
    onChange={this.handleCheckBox}
    value="ramzan"
/>
<input type="file" onChange={this.loadFile}/>
      </div>
    );
  }
}

export default Box;
