import { Grid, Typography } from '@material-ui/core'
import { delay } from 'core/scroll.consts'
import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import ScrollableAnchor from 'react-scrollable-anchor'

const Project = () => {

  const projects: any[] = []

  return(
    <ScrollableAnchor id={'project'}>
      <div className='container'>
        <ScrollAnimation animateIn="fadeIn" delay={delay} offset={0}>
          <div className='flex col center'>
            <Typography variant='h4' className='title'>
              Projetos
            </Typography>
            <Typography variant='h1' className='title after-divider'>
              Confira meus projetos
            </Typography>
          </div>
          <Grid 
            container 
            spacing={7} 
            direction="row"
            justify="center"
            alignItems="center">
              {projects.map((item, index) => (
                <Grid key={index} container item xs={3} spacing={3}>
                  {/* <CardTechnology data={item}/> */}
                </Grid>
              ))}
          </Grid>
        </ScrollAnimation>
        <div className='footer'>
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 10" preserveAspectRatio="none">
            <polygon points="100 0 100 10 0 10" />
          </svg>
        </div>
      </div>
    </ScrollableAnchor>
  )
}

export default Project