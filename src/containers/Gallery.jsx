import React from 'react'
import GalleryGrid from 'react-photo-gallery'
import Lightbox from 'react-images'
//
import p1 from '../images/1.jpg'
import p2 from '../images/2.jpg'
import p3 from '../images/3.jpg'
import p4 from '../images/4.jpg'
import p5 from '../images/5.jpg'
import p6 from '../images/6.jpg'
import p7 from '../images/7.jpg'
import p8 from '../images/8.jpg'
import p9 from '../images/9.jpg'
import p10 from '../images/10.jpg'
import p11 from '../images/11.jpg'
import p12 from '../images/12.jpg'

const PHOTO_SET = [
  {
    src: p1,
    width: 5,
    height: 7
  },
  {
    src: p2,
    width: 4,
    height: 5
  },
  {
    src: p3,
    width: 5,
    height: 7
  },
  {
    src: p4,
    width: 5,
    height: 7
  },
  {
    src: p5,
    width: 5,
    height: 7
  },
  {
    src: p6,
    width: 1,
    height: 1
  },
  {
    src: p7,
    width: 5,
    height: 7
  },
  {
    src: p8,
    width: 4,
    height: 5
  },
  {
    src: p9,
    width: 5,
    height: 7
  },
  {
    src: p10,
    width: 5,
    height: 7
  },
  {
    src: p11,
    width: 7,
    height: 5
  },
  {
    src: p12,
    width: 5,
    height: 7
  }
  
];

const w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0)
const h = Math.max(document.documentElement.clientHeight, window.innerHeight || 0)
let columnCount = 0

if (w < h || w < 600) {
  columnCount = 1
}
else {
  columnCount = 4
}

export default class Gallery extends React.Component {
  constructor () {
    super();
    this.state = { currentImage: 0 };
    this.closeLightbox = this.closeLightbox.bind(this);
    this.openLightbox = this.openLightbox.bind(this);
    this.gotoNext = this.gotoNext.bind(this);
    this.gotoPrevious = this.gotoPrevious.bind(this);
  }
  openLightbox(event, obj) {
    this.setState({
      currentImage: obj.index,
      lightboxIsOpen: true,
    });
  }
  closeLightbox() {
    this.setState({
      currentImage: 0,
      lightboxIsOpen: false,
    });
  }
  gotoPrevious() {
    this.setState({
      currentImage: this.state.currentImage - 1,
    });
  }
  gotoNext() {
    this.setState({
      currentImage: this.state.currentImage + 1,
    });
  }
  render () {
    return (
      <div className="gallery-container">
        <GalleryGrid photos={PHOTO_SET} onClick={this.openLightbox} columns={columnCount} margin={10} />
        <Lightbox images={PHOTO_SET}
          onClose={this.closeLightbox}
          onClickPrev={this.gotoPrevious}
          onClickNext={this.gotoNext}
          currentImage={this.state.currentImage}
          isOpen={this.state.lightboxIsOpen}
        />
      </div>
    )
  }
}
