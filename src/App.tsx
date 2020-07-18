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
import Technology from 'pages/Tecnology';
import React from 'react';
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

  const classes = useStyles();
  configureAnchors({offset: -64, scrollDuration: scrollDuration, keepLastAnchorHash: false})

  const downloadCV = () => {

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
            <h2 className='App-logo'>{`< Leonardo Marques >`}</h2>
          </Grid>
          <Grid item xs={12} sm={9} style={{textAlign: 'end'}}>
            <Button className={classes.spacingButtons} onClick={() => goToAnchor('home', true)}>Home</Button>
            <Button className={classes.spacingButtons} onClick={() => goToAnchor('aboutMe', true)}>Sobre Mim</Button>
            <Button className={classes.spacingButtons} onClick={() => goToAnchor('technology', true)}>Tecnologias</Button>
            <Button className={classes.spacingButtons} onClick={() => goToAnchor('project', true)}>Projetos</Button>
            <Button className={classes.spacingButtons} onClick={() => goToAnchor('contact', true)}>Contato</Button>
            <Button className={classes.spacingButtons} onClick={() => goToAnchor('network', true)}>Redes Sociais</Button>
            <Button className={classes.spacingButtons} onClick={() => downloadCV()} 
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
