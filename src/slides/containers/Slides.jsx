import React, { Component } from 'react'

import SlidesLayout from '../components/Slides-layout.jsx'

import slideOne from '../../img/products/mayo/slide-1.jpg'
import slideTwo from '../../img/products/mayo/slide-2.jpg'

import slideOneMovil from '../../img/movil/mayo/slide-1.jpg'
import slideTwoMovil from '../../img/movil/mayo/slide-2.jpg'

const screenWith = window.innerWidth

let slide1 = slideOne
let slide2 = slideTwo

if (screenWith <= 480) {
  slide1 = slideOneMovil
  slide2 = slideTwoMovil
}

const slides = [
  {
    src: slide1,
    title: 'Picatodo',
    slug: 'picatodo'
  },
  {
    src: slide2,
    title: 'Sandwichera',
    slug: 'sandwichera'
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
      value: 1
    }

    this.slideIndex = 0
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

  carousel = () => {
    let i
    const x = document.getElementsByClassName('mySlides')
    const dots = document.getElementsByClassName('demo')

    // this.setState((prevState) => ({
    //   value: prevState.value + 1
    // }))

    for (i = 0; i < x.length; i++) {
      x[i].style.display = 'none'
    }

    this.slideIndex++

    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(' active', '')
    }

    if (this.slideIndex > x.length) {
      // this.setState({ value: 1 })
      // x[1 - 1].style.display = 'block'
      this.slideIndex = 1
    }

    x[this.slideIndex - 1].style.display = 'block'
    dots[this.slideIndex - 1].className += ' active'

    setTimeout(this.carousel, 5000) // Change image every 2 seconds
  }

  componentDidMount () {
    this.showSlides(this.slideIndex)
    this.carousel()
  }

  render () {
    return (
      <SlidesLayout>
        <ul>
          {
            slides.map((item, index) => {
              return (
                <li key={index} className='mySlides'>
                  <a href={`/producto/${item.slug}`}>
                    <img src={item.src} alt={item.title} />
                  </a>
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
