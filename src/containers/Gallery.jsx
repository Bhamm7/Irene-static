import React from 'react'
import Gallery from 'react-photo-gallery'
//
import one from '../images/1.jpg'
import two from '../images/20.jpg'
import three from '../images/3.jpg'
import four from '../images/5t.jpg'
import five from '../images/5.jpg'
import nineteen from '../images/19.jpg'
import nine from '../images/9 crop.jpg'
import dog1 from '../images/doggo1.jpg'
import dog2 from '../images/doggo2.jpg'

const PHOTO_SET = [
  {
    src: one,
    width: 1,
    height: 1
  },
  {
    src: two,
    width: 4,
    height: 3
  },
  {
    src: three,
    width: 3,
    height: 4
  },
  {
    src: dog2,
    width: 4,
    height: 3
  },
  {
    src: five,
    width: 3,
    height: 4
  },
  {
    src: four,
    width: 3,
    height: 4
  },
  {
    src: nineteen,
    width: 3,
    height: 4
  },
  {
    src: dog1,
    width: 4,
    height: 3
  },
  {
    src: nine,
    width: 4,
    height: 3
  }
  
];

const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
let columnCount = 0

if (w < h || w < 600) {
  columnCount = 1
}
else {
  columnCount = 3
}

export default () => (
  <div>
    <Gallery photos={PHOTO_SET} columns={columnCount} />
  </div>
)
