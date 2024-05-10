import React from 'react'
import '../pages/instagram/style.css'

function Gallery ({ images }) {
  return (
    <div className='image-dis'>
      {images.map((image) => (
        <div className='img-div'>
        <img loading='lazy' src={image} alt=""/>
        </div>
      ))}
    </div>
  )
}

export default Gallery
