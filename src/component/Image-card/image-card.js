import React from 'react'


//apply this css file
import './image-card.css'

const ImageCard = ({ id, src, alt, imageHandler}) => {
  return (
    <div className='cards'>
      <div className='tiger'></div>
      <div className='card card1'>
        
        <div className='container' onClick={(e) => imageHandler(e, id, src)}>
          <img src={src} alt={alt} />
        {/* created none image so when we detect object doesnt want change the x and y position */}
          <img
            id={id}
            src={src}
            alt={alt}
            style={{ width: '900px', height: '700px', display: 'none' }}
          />
        </div>
        <div className='details'>
          <h3>{id}</h3>
          <p>check what inside this image</p>
        </div>
      </div>
    </div>
  )
}

export default ImageCard
