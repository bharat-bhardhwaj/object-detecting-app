import React, { useState } from 'react'
import * as ml5 from 'ml5'
import ImageData from '../Image-data/Image-data'
import ImageObject from '../image-objects/Image-object'
import { draw2 } from '../../canvas/draw'

import './Image-item.css'

const ImageItem = ({ set, src, id }) => {
  //save all the detected object in the predections

  const [predections, setPredections] = useState([])

  // ObjectHandler it is use to get all the objects present in a image
  const ObjectHandler = (e) => {
    setPredections(['loading'])
    e.preventDefault()

    //get the image
    const Image = document.getElementById('tiger')

    //get the coco ssd model
    const detector = ml5.objectDetector('cocossd', modelLoaded)
    function modelLoaded() {
      //detect all the objects by detector
      detector
        .detect(Image, function (err, results) {
          if (err) {
            //if any case error present
            console.log(err)
          }

          return results
        })
        .then((results) => {
          //set the predection value to results
          setPredections(results)
          //draw on canvas
          draw2(results)
        })
    }
  }

  return (
    <div className='container'>
      <div className='image-card'>
        {/* canvas here */}

        <ImageData src={src} />

        <img
          id='tiger'
          src={src}
          style={{ display: 'none' }}
          width='900px'
          height='700px'
          alt="item"
        ></img>
      </div>

      <ImageObject
        ObjectHandler={ObjectHandler}
        predections={predections}
        set={set}
      />
    </div>
  )
}

export default ImageItem
