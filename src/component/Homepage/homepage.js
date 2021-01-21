import React, { useState, Fragment } from 'react'
import { ImageData } from '../../data'
import ImageCard from '../Image-card/image-card'
import ImageItem from '../image-item/image-item'
import Header from '../Header/Header'

const HomePage = () => {
  //stores all the images in Image state
  const [images] = useState(ImageData)

  //store the src attribute of paritcular image so we can pass easily
  const [src, setSrc] = useState('')

  // store id of the paricular image
  const [id, setId] = useState('')

  //Image handler use to set the src or id
  const imageHandler = (e, id, src2) => {
    setSrc(src2)

    setId(id)
  }

  return (
    <Fragment>
      <Header />
      <div className='cards'>
        {/* check whether the src is present or not if present then render image item */}
        {src ? (
          <ImageItem set={setSrc} src={src} id={id} />
        ) : (
          // other wise loop on the images and create the image card
          images?.map((element) => {
            //require the particular image
            const data = require(`../../image/${element.imageSrc}`).default

            return (
              <ImageCard
                //generate the dynamic id
                id={`image${element.id}`}
                src={data}
                alt={'item'}
                key={element.id}
                imageHandler={imageHandler}
                
              />
            )
          })
        )}
      </div>
    </Fragment>
  )
}

export default HomePage
