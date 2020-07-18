import React from 'react'
import ScrollAnimation from 'react-animate-on-scroll'
import ScrollableAnchor from 'react-scrollable-anchor'
import { delay } from 'core/scroll.consts'
import '../../styles/sass/_home.scss'
import { Grid, Typography, makeStyles, Theme, createStyles, Button } from '@material-ui/core'
import WhatsAppIcon from '@material-ui/icons/WhatsApp';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    spacingButtons: {
      width: 185
    },
  }),
);

const Home = () => {

  const classes = useStyles();

  return(
    <ScrollableAnchor id={'home'}>
      <div className='container'>
        <div className='full-height'>
          <ScrollAnimation className='flex full-height' animateIn='fadeIn' delay={delay} offset={0}>
            <Grid container spacing={0} className='flex full-height'>
              <Grid item xs={12} sm={6} className='flex row center full-height'>
                <div className='content'>
                  <Typography variant='h1' className='title'>
                    Prazer,
                    <br/>
                    Eu sou o Leonardo!
                  </Typography>
                  <Typography variant='h6' className='title'>
                    Desenvolvedor Full-Stack (Sênior)
                  </Typography>
                  <div style={{width: '100%', justifyContent: 'center', display: 'flex', marginTop: 35}}>
                    <Button className={classes.spacingButtons}
                      href='https://whats.link/leonardomcleite'
                      target='_blank'
                      variant='contained'
                      color='secondary'
                      size='large'
                      endIcon={<WhatsAppIcon/>}>
                        Fale Comigo!
                    </Button>
                  </div>
                </div>
              </Grid>
              <Grid item xs={12} sm={6} className='flex row left v-center full-height'>
                <img className='programmer' src='./assets/images/dev.png' alt=''/>
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

export default Home