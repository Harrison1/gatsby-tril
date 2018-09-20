import React, { Component } from 'react'
import AngleRight from './icons/AngleRight'
import AngleLeft from './icons/AngleLeft'

const SlideOne = () =>
  <div className="carousel-slide">
    <div>
      <h1>Learn Coding in 24 Weeks</h1>
      <p className='sub-title'>Class starts May 15, 2018</p>
      <hr />
      <p>Coding Boot Camp equips students skills for full-stack web development through dynamic, in-person classes.</p>
    </div>
  </div>

const SlideTwo = () =>
  <div className="carousel-slide">
    <div>
      <h1>Date Analytics</h1>
      <p className='sub-title'>Learn Everything Data</p>
      <hr />
      <p>Data Boot Camp equips students with the key skills for full-stack web development through dynamic, in-person classes.</p>
    </div>
  </div>

const SlideThree = () =>
  <div className="carousel-slide">
    <div>
      <h1>Snapple Facts</h1>
      <p className='sub-title'>Some Super Sweet Facts</p>
      <hr />
      <p>Elephants are capable of swimming 20 miles per day.</p>
    </div>
  </div>

class Carousel extends Component {
  constructor(props) {
    super(props)

    this.state = {
      slide: 1
    }

    this.slideRight = this.slideRight.bind(this)
    this.slideLeft = this.slideLeft.bind(this)
  }

  slideRight() {
    if(this.state.slide >= 1 && this.state.slide < 3)
      this.setState(state => ({
        slide: state.slide+1
      }))
  }

  slideLeft() {
    if(this.state.slide <= 3 && this.state.slide > 1)
      this.setState(state => ({
        slide: state.slide-1
      }))
  }

  render() {
    return (
      <div className="carousel">
        <button onClick={this.slideLeft} aria-label="Carousel Arrow Left"><AngleLeft /></button>
        <div>
          {this.state.slide === 1 && <SlideOne />}
          {this.state.slide === 2 && <SlideTwo />}
          {this.state.slide === 3 && <SlideThree />}
        </div>
        <button onClick={this.slideRight} aria-label="Carousel Arrow Right"><AngleRight /></button>
      </div>
    )
  }
}

export default Carousel
