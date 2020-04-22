import React from 'react'

const VedioItem = ({video,onVideoSelect}) => {

   debugger
    return (
        <div onClick={() => onVideoSelect(video)} className="item">

             <img className="ui image" src={video.snippet.thumbnails.medium.url} />
             <div  className="content">
                    <div className="header">
                    <h3>{video.snippet.title}</h3> 
                    </div>
             </div>
             
        </div>
    )
}

export default VedioItem
