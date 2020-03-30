import React, { Component } from 'react';
import SearchBar from './SearchBar'
import axios from 'axios';

 class MainPage extends Component {
 
  
    onSubmit = (value) => {
        console.log("Value",value)
        axios.get('https://api.unsplash.com/search/photos',{
            params: {query: value},
            headers: {
                Authorization: 'Client-ID Wx4wQpHvRbcinFP64C9aMLXM7zYaYR104De8_vIFJ2M'
            }
        })
    }
    render() {
        return (
            <div>
                <SearchBar onSubmit={this.onSubmit} />
            </div>
        )
    }
}
export default MainPage;