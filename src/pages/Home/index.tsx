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
      marginLeft: 10,
    },
  }),
);

const Home = () => {

  const classes = useStyles();

  return(
    <ScrollableAnchor id={'home'}>
      <div className='container'>
        <ScrollAnimation animateIn="fadeIn" delay={delay} offset={0}>
          <Grid container spacing={0}>
            <Grid item xs={12} sm={6}>
              <div className='content'>
                <Typography variant="h1" className='title'>
                  Prazer,
                </Typography>
                <Typography variant="h1" className='title'>
                  Eu sou o Leonardo!
                </Typography>
                <Typography variant="h6" className='title'>
                  Desenvolvedor Full-Stack (Sênior)
                </Typography>
                <Button className={classes.spacingButtons}
                  variant="contained"
                  color='secondary'
                  endIcon={<WhatsAppIcon/>}>
                    Fale Comigo!
                </Button>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <img src="./assets/images/dev.png" alt=""/>
            </Grid>
          </Grid>
        </ScrollAnimation>
      </div>
    </ScrollableAnchor>
  )
}

export default Home