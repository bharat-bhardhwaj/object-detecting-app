import React, { useState, Fragment } from 'react'

import { draw3,draw4 } from '../../canvas/draw'

import './Image-object.css'

const ImageObject = ({ ObjectHandler, predections, set }) => {

  //store the check condition of is show label
  const [isChecked, setisChecked] = useState(true)
  


  // handle change is use for check show label no or not

  const handleChange = (e) => {
  
    if (e.target.value === 'true') {
      draw3(false)
    } else {
      
      draw4(true)
    }

    setisChecked(!isChecked)
  }

  return (
    <div>
      <div className='ObjectDetails'>
        <div className='button'>
          <button
            className='btn'
            onClick={(e) => {
              e.preventDefault()
              set('')
            }}
          >
            Cancel
          </button>
          <button
            className='btn'
            onClick={(e) => {
              e.preventDefault()
              ObjectHandler(e)
            }}
          >
            Get All Object details
          </button>
          <div className='check'>

            {/* when we get all the objects only show the label check box */}
            {predections?.length > 0 && (
              <Fragment>
                <input
                  type='checkbox'
                  value={isChecked}
                  checked={isChecked ? true : false}
                  onChange={(e) => handleChange(e)}
                />
                <span className='show'>show/hide labelNO</span>
              </Fragment>
            )}
          </div>
        </div>

        <div className='details2'>
          <h3>details of objects</h3>
          <hr></hr>
          
          {/* when loading show loading */}

          {predections[0] === 'loading' ? (
            'loading.....'
          ) : predections?.length < 1 ? (
            <h>click the above button to see all the objects</h>
          ) : (
            <div>
              <h5>
                hover on the Rectangle of box to see the label name of that
                object
              </h5>

              {/* iterate on each object and get the data */}
              {predections?.map((ele, index) => {
                return (
                  <div className='block' key={index}>
                    <h2>{index + 1}</h2>
                    <span>label__ : _{ele.label}</span>
                    <span>Confidence_:_{ele.confidence__ < 0.2 ? 0 : 1}</span>
                    <span>
                      Annotation size__:_
                      {`(${Math.floor(ele.x)},${Math.floor(ele.y)})`}
                    </span>
                    <hr></hr>
                  </div>
                )
              })}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}
export default ImageObject
