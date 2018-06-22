import React, { Component } from 'react'
import slideOne from '../../img/slide-1.jpg'
import SlidesLayout from '../components/Slides-layout.jsx'

const slides = [
  {
    src: slideOne,
    title: 'slide-1',
    styles: {
      display: 'block'
    }
  },
  {
    src: 'https://cdn.pixabay.com/photo/2016/02/20/21/41/vegetables-1212845_960_720.jpg',
    title: 'slide-2',
    styles: {
      display: 'none'
    }
  },
  {
    src: slideOne,
    title: 'slide-3',
    styles: {
      display: 'none'
    }
  }
]

let slideIndex = 1

class Slides extends Component {
  constructor (props) {
    super(props)
    this.state = {
      slideIndex: 1
    }

    // this.plusSlides = this.plusSlides.bind(this)
  }

  plusSlides (n) {
    // console.log('ok' + n)
    // n = slideIndex + n
    this.showSlides(this.state.slideIndex += n)
  }

  showSlides (n) {
    var i
    var x = document.getElementsByClassName('mySlides')
    if (n > x.length) { this.state.slideIndex = 1 }
    if (n < 1) { this.state.slideIndex = x.length }
    for (i = 0; i < x.length; i++) {
      x[i].style.display = 'none'
    }
    x[this.state.slideIndex - 1].style.display = 'block'
  }

  componentDidMount () {
    this.showSlides(this.state.slideIndex)
  }

  render () {
    return (
      <SlidesLayout>
        <ul>
          <button className='left' onClick={this.plusSlides.bind(this, -1)}>&#10094;</button>
          <button className='right' onClick={this.plusSlides.bind(this, 1)}>&#10095;</button>
          {
            slides.map((item, index) => {
              return (
                <li key={index}>
                  <img src={item.src} alt={item.title} className='mySlides' style={item.styles} />
                </li>
              )
            })
          }
        </ul>
      </SlidesLayout>
    )
  }
}

export default Slides
