import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import ScrollableAnchor from 'react-scrollable-anchor'
import { delay } from 'core/scroll.consts'

const Contact = () => {

  return(
    <ScrollableAnchor id={'contact'}>
      <div className='container'>
        <ScrollAnimation animateIn="fadeIn" delay={delay} offset={0}>
          Contato
        </ScrollAnimation>
      </div>
    </ScrollableAnchor>
  )
}

export default Contact