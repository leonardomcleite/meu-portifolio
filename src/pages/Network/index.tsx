import { Typography } from '@material-ui/core'
import { delay } from 'core/scroll.consts'
import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'

const Network = () => {

  return(
    <div className='container'>
      <ScrollAnimation animateIn="up-down" delay={delay} offset={0}>
        <Typography variant='h1' className='title' style={{textAlign: 'center'}}>
          Obrigado!
        </Typography>
      </ScrollAnimation>
    </div>
  )
}

export default Network