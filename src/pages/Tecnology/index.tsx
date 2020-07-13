import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import ScrollableAnchor from 'react-scrollable-anchor'
import { delay } from 'core/scroll.consts'

const Technology = () => {

  return(
    <ScrollableAnchor id={'technology'}>
      <div className='container'>
        <ScrollAnimation animateIn="fadeIn" delay={delay} offset={0}>
          Tecnologia
        </ScrollAnimation>
      </div>
    </ScrollableAnchor>
  )
}

export default Technology