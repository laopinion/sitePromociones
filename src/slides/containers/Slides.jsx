import React, { Component } from 'react'
import slideOne from '../../img/products/slide.jpg'
import SlidesLayout from '../components/Slides-layout.jsx'
import slideOneMovil from '../../img/movil/slide-1.jpg'

const screenWith = window.innerWidth
let slide1 = slideOne
let slide2 = slideOne
let slide3 = slideOne

if (screenWith <= 480) {
  slide1 = slideOneMovil
  slide2 = slideOneMovil
}

const slides = [
  {
    src: slide1,
    title: 'slide-1'
  },
  {
    src: slide2,
    title: 'slide-2'
  },
  {
    src: slide3,
    title: 'slide-3'
  }
]

/*
  img de pruebas -> https://www.pexels.com/
*/

// let slideIndex = 1

class Slides extends Component {
  constructor (props) {
    super(props)
    this.state = {
      // slideIndex: 1
    }

    this.slideIndex = 1
    // this.plusSlides = this.plusSlides.bind(this)
  }

  plusSlides (n) {
    // console.log('ok' + n)
    // n = slideIndex + n
    this.showSlides(this.slideIndex += n)
  }

  showSlides (n) {
    let i
    const x = document.getElementsByClassName('mySlides')
    const dots = document.getElementsByClassName('demo')

    if (n > x.length) { this.slideIndex = 1 }
    if (n < 1) { this.slideIndex = x.length }

    for (i = 0; i < x.length; i++) {
      x[i].style.display = 'none'
    }

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '')
    }

    x[this.slideIndex - 1].style.display = 'block'
    dots[this.slideIndex - 1].className += ' active'
  }

  currentDiv (n) {
    this.showSlides(this.slideIndex = n)
  }

  componentDidMount () {
    this.showSlides(this.slideIndex)
  }

  render () {
    return (
      <SlidesLayout>
        <ul>
          {
            slides.map((item, index) => {
              return (
                <li key={index}>
                  <img src={item.src} alt={item.title} className='mySlides' />
                </li>
              )
            })
          }
          <div className='container btn_slides'>
            <button className='btn left' onClick={this.plusSlides.bind(this, -1)}>&#10094;</button>
            <button className='btn right' onClick={this.plusSlides.bind(this, 1)}>&#10095;</button>
            <div className='badges'>
              {slides.map((item, index) => {
                return <span key={index} className='badge demo' onClick={this.currentDiv.bind(this, index + 1)} />
              })}
            </div>
          </div>
        </ul>
      </SlidesLayout>
    )
  }
}

export default Slides
