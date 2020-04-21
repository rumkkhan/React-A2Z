import React from 'react';
import SearchBar from './SearchBar'
import youtube from './youtube'


class ThirdApp extends React.Component {

   state = {vedios:[]}

    onTermSubmit = async (term) => {
        console.log(term,'new value')

      var response = await   youtube.get('/search',{
            params: {
                q: term
            }
        })

        this.setState({videos:response.data.items}); 
    }

    render() {

        return (
            <div>
                <SearchBar onTermSubmit={this.onTermSubmit} />
            </div>
        )
    }
}

export default ThirdApp;