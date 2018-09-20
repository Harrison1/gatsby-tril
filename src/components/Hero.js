import React, { Component } from 'react'
import ContactCard from './ContactCard'
import HeroFeature from './HeroFeature'
import Carousel from './Carousel'
import throttle from 'lodash/throttle'

class Hero extends Component {

  constructor(props) {
    super(props)

    this.state = {
      isMobile: false
    }

    this.checkMobile = throttle(this.checkMobile.bind(this), 250)
  }

  checkMobile(e) {
    if(e.target.innerWidth < 768) {
      this.setState({
        isMobile: true
      })
    } else {
      this.setState({
        isMobile: false
      })
    }
  }

  componentDidMount() {
    if(window.innerWidth < 768 ) {
      this.setState({
        isMobile: true
      })
    }
    window.addEventListener('resize', e => this.checkMobile(e))
  }

  render() {
    return (
      <div>
        {!this.state.isMobile && 
          <section className='hero'>
            <div className='container hero-grid'>
              <div>
                <h1>Learn Coding<br />in 24 Weeks</h1>
                <p className='sub-title'>Class starts May 15, 2018</p>
                <ContactCard />
              </div>
              <div className='hero-features-grid'>
                <HeroFeature 
                  color='blue'
                  title='CODING'
                  content='Coding Boot Camp equips students skills for full-stack web development through dynamic, in-person classes.'
                />
                <HeroFeature 
                  color='white'
                  title='DATA ANALYTICS'
                  content='Data Boot Camp equips students with the key skills for full-stack web development through dynamic, in-person classes.'
                />
              </div>
            </div>
          </section>
        }
        {this.state.isMobile && 
          <section>
            <Carousel />
            <ContactCard />
          </section>
        }
      </div>
    )
  }
}

export default Hero
