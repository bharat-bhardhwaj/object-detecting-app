import React, { useEffect ,useRef } from 'react'
import Paper from 'paper'
import {draw1} from '../../canvas/draw';

const ImageData = () => {

  //using ref canvas
  const canvasRef = useRef()

  useEffect(()=> {
    const canvas = canvasRef.current
    Paper.setup(canvas)
    draw1()
    
  },[])
  return (
    
      <canvas
      ref={canvasRef}
      id='canvas'
      resize='true'
      height='700px'
      width='900px'
    ></canvas>

       
  
    
  )
}

export default ImageData
