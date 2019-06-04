import React, { Component } from 'react'
import Link from 'next/link'
import Slides from '../Slides'

class SlidesContainer extends Component {
  constructor (props) {
    super(props)

    let slide1 = '/static/products/mayo/slide-1.jpg'
    let slide2 = '/static/products/mayo/slide-2.jpg'

    this.state = {
      // slideIndex: 1
      value: 1,
      height: 0,
      width: 0,
      slides: [
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
    }

    this.timeSlide = null

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

    if (x.length) {
      x[this.slideIndex - 1].style.display = 'block'
      dots[this.slideIndex - 1].className += ' active'
    }

    this.timeSlide = setTimeout(this.carousel, 5000) // Change image every 2 seconds
  }

  componentDidMount () {
    this.showSlides(this.slideIndex)
    this.carousel()
    this.update()

    window.addEventListener('resize', this.update)
  }

  update = () => {
    let screenWith = this.state.width || window.innerWidth
    // console.log(screenWith)

    let slide1 = '/static/products/mayo/slide-1.jpg'
    let slide2 = '/static/products/mayo/slide-2.jpg'

    if (screenWith <= 480) {
      slide1 = '/static/movil/mayo/slide-1.jpg'
      slide2 = '/static/movil/mayo/slide-2.jpg'
    }

    this.setState({
      height: window.innerHeight,
      width: window.innerWidth,
      slides: [{ ...this.state.slides[0], src: slide1 }, { ...this.state.slides[1], src: slide2 }]
    })
  }

  componentWillUnmount () {
    this.update()
    window.removeEventListener('resize', this.update)

    if (document.getElementsByClassName('mySlides').length) {
      clearTimeout(this.timeSlide)
    }
  }

  render () {
    // console.log(this.state)
    return (
      <Slides>
        <ul>
          {
            this.state.slides.map((item, index) => {
              return (
                <li key={index} className='mySlides'>
                  <Link as={`/producto/${item.slug}`} href={`/producto?slug=${item.slug}`}>
                    <a><img src={item.src} alt={item.title} /></a>
                  </Link>
                </li>
              )
            })
          }
          <div className='container btn_slides'>
            <button className='btn left' onClick={this.plusSlides.bind(this, -1)}>&#10094;</button>
            <button className='btn right' onClick={this.plusSlides.bind(this, 1)}>&#10095;</button>
            <div className='badges'>
              {this.state.slides.map((item, index) => {
                return <span key={index} className='badge demo' onClick={this.currentDiv.bind(this, index + 1)} />
              })}
            </div>
          </div>
        </ul>
        <style jsx>{`
          .mySlides {
            display: none;
          }
        `}</style>
      </Slides>
    )
  }
}

export default SlidesContainer
