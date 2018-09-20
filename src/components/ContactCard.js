import React, { Component } from 'react'
import AngleRight from './icons/AngleRight'

class ContactCard extends Component {
  constructor(props) {
    super(props)

    this.state= {
      step: 1
    }

    this.increaseStep = this.increaseStep.bind(this)
  }

  increaseStep() {
    if(this.state.step < 3)
      this.setState(state => ({
        step: state.step+1
      }))
  }

  render() {
    return (
      <div className='contact-card'>
        <h3>Get Program Info</h3>
        <p>Step {this.state.step} of 3</p>
        <input name='firstname' type='text' placeholder='First Name' aria-label='First Name' />
        <input name='lastname' type='text' placeholder='Last Name' aria-label='Last Name' />
        <button className='contact-button' onClick={this.increaseStep} aria-label='Contine Information Form'>CONTINUE <AngleRight /></button>
      </div>
    )
  }
}

export default ContactCard
