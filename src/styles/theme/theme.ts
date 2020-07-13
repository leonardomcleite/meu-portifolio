import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

export let theme = createMuiTheme({
  typography: {
    h1: {
      fontSize: 48,
      fontWeight: 700,
      '@media (min-width:600px)': {
        fontSize: '1.5rem',
      },
    },
    h2: {
      fontSize: 24,
      fontWeight: 700,
      '@media (min-width:600px)': {
        fontSize: '0.75rem',
      },
    },
  },
  palette: {
    primary: {
      // light: será calculada com base em palette.primary.main,
      main: '#4C6383',
      contrastText: '#fff',
      // dark: será calculada com base em palette.primary.main,
      // contrastText: será calculada para contrastar com palette.primary.main
    },
    secondary: {
      light: '#0097a7',
      main: '#00897b',
      // dark: será calculada com base palette.secondary.main,
      contrastText: '#fff',
    },
    // Usado por `getContrastText()` para maximizar o contraste entre
    // o plano de fundo e o texto.
    contrastThreshold: 3,
    // Usado pelas funções abaixo para mudança de uma cor de luminância por aproximadamente
    // dois índices dentro de sua paleta tonal.
    // Por exemplo, mude de Red 500 para Red 300 ou Red 700.
    tonalOffset: 0.2,
  },
});

theme = responsiveFontSizes(theme);