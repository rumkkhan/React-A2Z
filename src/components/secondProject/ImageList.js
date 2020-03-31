import React from 'react'

function ImageList(props) {

    const images = props.images.map((img,index) => {
        return <img src={img.urls.regular} key={index}/>
    })

    return (
        <div>
            {images}
        </div>
    )
}

export default ImageList
