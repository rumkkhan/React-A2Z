import React from 'react';
import SearchBar from './SearchBar'
import youtube from './youtube'
import VideoList from './VideoList';
import VideoDetails from './VideoDetail'


class ThirdApp extends React.Component {

   state = {videos:[], selectedVideo: null}

    onTermSubmit = async (term) => {
        console.log(term,'new value')
      var response = await   youtube.get('/search',{
            params: {
                q: term
            }
        })
        this.setState({videos:response.data.items}); 
    }


onVideoSelect = video => {
    console.log("Video", video);
    this.setState({selectedVideo: video})
}
    render() {
        return (
            <div>
                <SearchBar onTermSubmit={this.onTermSubmit} />
                <VideoDetails  video={this.state.selectedVideo} />
                <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
            </div>
        )
    }
}

export default ThirdApp;