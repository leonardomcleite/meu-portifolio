import { AppBar, Button, createStyles, CssBaseline, Fab, Grid, makeStyles, Theme, ThemeProvider } from '@material-ui/core';
import Toolbar from '@material-ui/core/Toolbar';
import ExpandLessIcon from '@material-ui/icons/ExpandLess';
import GetAppIcon from '@material-ui/icons/GetApp';
import 'animate.css/animate.min.css';
import AboutMe from 'pages/AboutMe';
import Contact from 'pages/Contact';
import Home from 'pages/Home';
import Network from 'pages/Network';
import Project from 'pages/Project';
import Technology from 'pages/Technology';
import React, { useState } from 'react';
import { configureAnchors, goToAnchor, goToTop } from 'react-scrollable-anchor';
import { theme } from './styles/theme/theme';
import { scrollDuration } from 'core/scroll.consts';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
    },
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
      flexGrow: 1,
    },
    spacingButtons: {
      marginLeft: 10,
    },
    mgSp1: {
      margin: theme.spacing(1),
      position: 'fixed',
      bottom: theme.spacing(2),
      right: theme.spacing(2),
    }
  }),
);

function App() {

  const [btnClass, setBtnClass] = useState<any>({
    home: 'btnLink active',
    aboutMe: 'btnLink ',
    technology: 'btnLink ',
    project: 'btnLink ',
    contact: 'btnLink ',
  })

  const classes = useStyles();
  configureAnchors({offset: -64, scrollDuration: scrollDuration, keepLastAnchorHash: false})

  const goTo = (hash: string) => {
    goToAnchor(hash);
    isActive();
  }

  const isActive = () => {
    const hash = window.location.hash.replace('#', '');
    const btns: any = {};
    for (const key in btnClass) {
      if (Object.prototype.hasOwnProperty.call(btnClass, key)) {
        btns[key] = 'btnLink ';
        if (hash === key)
          btns[key] = 'btnLink active'
      }
    }
    setBtnClass(btns)
  }

  return (
    <ThemeProvider theme={theme}>
      <Fab size="small" color="secondary" aria-label="add" className={classes.mgSp1} onClick={goToTop} style={{ zIndex: 1}}>
        <ExpandLessIcon />
      </Fab>
      <CssBaseline />
      <AppBar position='fixed'>
        <Toolbar color='inherit'>
        <Grid container spacing={0}>
          <Grid item xs={12} sm={3}>
            <h2 className='App-logo'>{`<LeonardoMarques/>`}</h2>
          </Grid>
          <Grid item xs={12} sm={9} style={{textAlign: 'end'}}>
            <Button className={btnClass.home} onClick={() => goTo('home')}>Home</Button>
            <Button className={btnClass.aboutMe} onClick={() => goTo('aboutMe')}>Sobre Mim</Button>
            <Button className={btnClass.technology} onClick={() => goTo('technology')}>Tecnologias</Button>
            <Button className={btnClass.project} onClick={() => goTo('project')}>Projetos</Button>
            <Button className={btnClass.contact} onClick={() => goTo('contact')}>Contato</Button>
            <Button className={classes.spacingButtons} href='./assets/Leonardo Marques de Castro Leite.pdf' download
              variant="contained"
              color='primary'
              endIcon={<GetAppIcon/>}>
                Currículo
            </Button>
          </Grid>
        </Grid>
        </Toolbar>
      </AppBar>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Home/>
        <AboutMe/>
        <Technology/>
        <Project/>
        <Contact/>
        <Network/>
      </main>
    </ThemeProvider>
  );
}

export default App;
