import React, { Component } from 'react'
import AngleRight from './icons/AngleRight'

class Question extends Component {
  constructor(props) {
    super(props)

    this.state = {
      showAnswer: false
    }

    this.toggleAnswer = this.toggleAnswer.bind(this)
  }

  toggleAnswer() {
    this.setState(state => ({
      showAnswer: !state.showAnswer
    }));
  }

  render() {
    return (
      <div className='faq-container'>
        <button className={`faq-question ${this.state.showAnswer ? 'open': 'closed'}`} aria-label={this.props.question} onClick={this.toggleAnswer}><AngleRight /> {this.props.question}</button>
        {!this.props.list && <p className={`faq-answer ${this.state.showAnswer ? 'open': 'closed'}`}>{this.props.answer}</p> }
        {this.props.list && <div className={`faq-answer ${this.state.showAnswer ? 'open': 'closed'}`}>{this.props.answer}</div> }
      </div>
    )
  }
}

export default Question
