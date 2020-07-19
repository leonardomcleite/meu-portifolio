import { Typography } from '@material-ui/core'
import { delay } from 'core/scroll.consts'
import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import ScrollableAnchor from 'react-scrollable-anchor'
import CardContact from 'components/CardContact'
import '../../styles/sass/_contact.scss'

const Contact = () => {

  const contacts: any[] = [
    {title: 'Email:', subtitle: 'leonardo.castroleite@gmail.com', icon: 'fas fa-envelope'},
    {title: 'Linked-In:', subtitle: 'linkedin.com/in/leonardo-marques-de-castro-leite-48745aa5', icon: 'fab fa-linkedin-in'},
    {title: 'WhatsApp:', subtitle: '(11) 98900-5629', icon: 'fab fa-whatsapp'},
    {title: 'GitHub:', subtitle: 'github.com/leonardomcleite', icon: 'fab fa-github'},
    
  ]

  return(
    <ScrollableAnchor id={'contact'}>
      <div className='container'>
        <ScrollAnimation animateIn='fadeInToBottom' delay={delay} offset={0} duration={0.8}>
          <div className='flex col center'>
            <Typography variant='h4' className='title'>
              Contanto
            </Typography>
            <Typography variant='h1' className='title after-divider'>
              Entre em contato pelos canais abaixo
            </Typography>
          </div>
          <div className='flex row center'>
            <CardContact data={contacts}/>
          </div>
        </ScrollAnimation>
        <div className='footer'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 10' preserveAspectRatio='none'>
            <polygon points='100 0 100 10 0 10' />
          </svg>
        </div>
      </div>
    </ScrollableAnchor>
  )
}

export default Contact