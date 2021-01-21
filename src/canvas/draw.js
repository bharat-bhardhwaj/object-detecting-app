import { Path, Point, Raster, view, PointText} from 'paper'


// all code realated to paper js
export const draw1 = () => {
  Raster.prototype.rescale = function (width, height) {
    this.scale(width / this.width, height / this.height)
  }

  var raster = new Raster('tiger')

  raster.position = view.center

  raster.rescale(900, 700)
}

var text2 = []


export const draw2 = (predections) => {
 



  predections.map((ele, index) => {
  
    var color = `#${((Math.random() * 0xffffff) << 0).toString(16)}`
  

    var Rectangle = new Path.Rectangle(ele.x, ele.y, ele.width, ele.height)
    Rectangle.strokeColor = color
    Rectangle.strokeWidth = 5

    var Rectangle2 = new Path.Rectangle(ele.x, ele.y, ele.width, ele.height)
    Rectangle2.fillColor = color
    Rectangle2.opacity = 0.1

    var text = new PointText(new Point(ele.x + 40, ele.y - 10))
    text.justification = 'right'
    text.fillColor = color
    text.content = `${index + 1})`
    text.fontSize = '30'

    Rectangle2.onMouseEnter = function (event) {
      text.content = `${ele.label} `
    }

    Rectangle2.onMouseLeave = function (event) {
      text.content = `${index + 1}`
    }

    return text2.push(text)
    
  })
}

export const draw3 = (type) => {
  text2.map((ele) => {
    return ele.visible = type
  })
}

export const draw4 = (type) => {
  text2.map((ele) => {
    return ele.visible = type
  })
}
