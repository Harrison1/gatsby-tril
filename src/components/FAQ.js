import React from 'react'
import SectionTitle from './SectionTitle'
import Question from './Question'

const FAQ = () =>
  <section className='faq'>
    <div className='container faq-grid'>
      <div>
        <SectionTitle title='Frequently Asked Questions' color='black' />
        <Question
          question='When Does the Program Start?'
          answer='The Program starts in May 2019'
        />
        <Question
          question='Can I keep working while studying at Trilogy Data Science and Analytics?'
          answer='Snapple Fact: Peaches are members of the almond family.'
        />
        <Question
          question='How long does it take to Complete the program?'
          answer='Snapple Fact: The average speed of a housefly is 4.5 mph.'
        />
        <Question
          question='Do you provide career placement support?'
          answer='Snapple Fact: Emus and kangaroos cannot walk backward.'
        />
        <Question
          question='Do I need to have previous experience in programming or data analytics before applying?'
          answer='Snapple Fact: Broccoli is the only vegetable that is also a flower.'
        />
        <Question
          question='What sets your boot camp apart from other I can join in Trilogy?'
          list
          answer={<ul>
            <li>The Hawaiian alphabet has only 12 letters.</li>
            <li>Termites eat through wood two times faster when listening to rock music!</li>
            <li>Frogs cannot swallow with their eyes open.</li>
          </ul>}
        />
      </div>
    </div>
  </section>

export default FAQ
