import React from 'react';
import VideoItem from './VedioItem';



 const VideoList = ({videos,onVideoSelect})  =>{
     
        const renderItems = videos.map(video => {
            return <VideoItem onVideoSelect={onVideoSelect} video={video} />;
        })
        
    return (
        <div  className="ui relaxed divided list">
            {renderItems}
        </div>
    )
}

export default VideoList
