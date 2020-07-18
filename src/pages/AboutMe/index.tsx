import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import ScrollableAnchor from 'react-scrollable-anchor'
import { delay } from 'core/scroll.consts'
import { Grid, Typography, Button } from '@material-ui/core'
import classes from '*.module.css'

const AboutMe = () => {

  return(
    <ScrollableAnchor id={'aboutMe'}>
      <div className='container'>
        <div className='full-height'>
          <ScrollAnimation className='flex full-height' animateIn='fadeIn' delay={delay} offset={0}>
            <Grid container spacing={0} className='flex full-height'>
              <Grid item xs={12} sm={6} className='flex row center full-height'>
                <img src='./assets/images/about-me.png' alt=''/>
              </Grid>
              <Grid item xs={12} sm={6} className='flex row center full-height'>
                <div className='content'>
                  <Typography variant='h1' className='title'>
                    Sobre mim
                  </Typography>
                  <Typography variant='h6' className='title'>
                    Cursando Análise e Desenvolvimento de Sistemas na UNIP, formado em Engenharia Elétrica. ​
                    Aluno do Boot Camp GoStack da Rocketseat. Venho criando projetos com as tecnologias:​
                    HTML, CSS, JavaScript, TypeScript, Node.js, React JS, React Native, SQL, NoSQL.​
                    Pronto para participar de novos projetos e aprender ainda mais sobre esse mundo do desenvolvimento.
                  </Typography>
                </div>
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