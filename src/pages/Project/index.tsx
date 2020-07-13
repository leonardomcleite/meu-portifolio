import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import ScrollableAnchor from 'react-scrollable-anchor'
import { delay } from 'core/scroll.consts'

const Project = () => {

  return(
    <ScrollableAnchor id={'project'}>
      <div className='container'>
        <ScrollAnimation animateIn="fadeIn" delay={delay} offset={0}>
          Projetos
        </ScrollAnimation>
      </div>
    </ScrollableAnchor>
  )
}

export default Project