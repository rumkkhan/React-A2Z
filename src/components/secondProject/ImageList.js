import React from 'react'
import './imageList.css'
import ImageCard from './ImageCard';

function ImageList(props) {

    const images = props.images.map((img,index) => {
        return <ImageCard image={img} key={index}/>
    })

    return (
        <div className="image-list">
            {images}
        </div>
    )
}

export default ImageList
