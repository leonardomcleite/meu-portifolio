import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import ScrollableAnchor from 'react-scrollable-anchor'
import { delay } from 'core/scroll.consts'

const AboutMe = () => {

  return(
    <ScrollableAnchor id={'aboutMe'}>
      <div className='container'>
        <ScrollAnimation animateIn="fadeIn" delay={delay} offset={0}>
          Sobre Mim
        </ScrollAnimation>
      </div>
    </ScrollableAnchor>
  )
}

export default AboutMe