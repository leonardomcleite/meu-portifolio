import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import ScrollableAnchor from 'react-scrollable-anchor'
import { delay } from 'core/scroll.consts'

const Network = () => {

  return(
    <ScrollableAnchor id={'network'}>
      <div className='container'>
        <ScrollAnimation animateIn="fadeIn" delay={delay} offset={0}>
          Redes Sociais
        </ScrollAnimation>
      </div>
    </ScrollableAnchor>
  )
}

export default Network