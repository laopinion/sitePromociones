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
    src: 'https://images.pexels.com/photos/1110656/pexels-photo-1110656.jpeg?cs=srgb&dl=calm-clear-water-clouds-1110656.jpg&fm=jpg',
    title: 'slide-2',
    styles: {
      display: 'none'
    }
  },
  {
    src: 'https://images.pexels.com/photos/1109541/pexels-photo-1109541.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
    title: 'slide-3',
    styles: {
      display: 'none'
    }
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
          {
            slides.map((item, index) => {
              return (
                <li key={index}>
                  <img src={item.src} alt={item.title} className='mySlides' style={item.styles} />
                </li>
              )
            })
          }
          <div className='container btn_slides'>
            <button className='btn left' onClick={this.plusSlides.bind(this, -1)}>&#10094;</button>
            <button className='btn right' onClick={this.plusSlides.bind(this, 1)}>&#10095;</button>
          </div>
        </ul>
      </SlidesLayout>
    )
  }
}

export default Slides
