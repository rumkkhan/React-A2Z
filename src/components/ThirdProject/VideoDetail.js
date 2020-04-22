import React from 'react';

const VideoDetail = ({video}) => {
    if(!video)
        return <div>Loading...</div>

        debugger;
      return <div>
          <div  className="ui segment">
         <h2>{video.snippet.title}</h2> 
<p>{video.snippet.description}</p>
          </div>          
          </div>
}

export default VideoDetail;