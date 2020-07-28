import { Grid, Typography } from '@material-ui/core'
import { delay } from 'core/scroll.consts'
import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import ScrollableAnchor from 'react-scrollable-anchor'

const AboutMe = () => {

  return(
    <ScrollableAnchor id={'aboutMe'}>
      <div className='container code'>
        <div className='full-height'>
          <ScrollAnimation className='flex full-height' animateIn='fadeIn' delay={delay} offset={0}>
            <Grid container spacing={0} className='flex row center full-height'>
              <Grid item xs={12} sm={9} className='flex row center full-height'>
                <ScrollAnimation animateIn='fadeInToBottom' delay={delay} offset={0}>
                  <div className='content highlight'>
                    <img className='avatar' src='./assets/images/avatar.png' alt=''/>
                    <div className='flex col'>
                      <Typography variant='h1' className='title'>
                        Sobre mim
                      </Typography>
                      <Typography variant='h6' className='title'>
                      Minhas áreas de atuação são:
                        Front-end (Nível Sênior) utilizando Angular 2+, Html 5, SASS, CSS 3, TPS, JS.
                        Back-end (Nível Pleno) utilizando Java 8+ (com Spring Boot) + comunicação com bancos relacionais como Oracle, SQL Server.
                        Back-end (Nível Júnior) utilizando Node (com NestJs) + comunicação com bancos não relacionais como MongoDB, MariaDB.
                      </Typography>
                    </div>
                  </div>
                </ScrollAnimation>
              </Grid>
            </Grid>
          </ScrollAnimation>
        </div>
        <div className='footer'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10" preserveAspectRatio="none">
            <polygon points="100 0 100 10 0 10" />
          </svg>
        </div>
      </div>
    </ScrollableAnchor>
  )
}

export default AboutMe