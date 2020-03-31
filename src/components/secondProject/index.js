import React, { Component } from 'react';
import SearchBar from './SearchBar'
import unsplash from '../secondProject/api/unsplash';
import ImageList from './ImageList';

 class MainPage extends Component {
   
    state = {
        images: []
    }
  
    onSubmit = async (value) => {
  
    const response =  await  unsplash.get('/search/photos',{
            params: {query: value}
        })
        debugger
        this.setState({images:response.data.results})
     
    }


    render() {
        return (
            <div>
                <SearchBar onSubmit={this.onSubmit} />
                <ImageList images={this.state.images} />
            </div>
        )
    }
}
export default MainPage;