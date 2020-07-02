import { createMuiTheme } from '@material-ui/core/styles'
import { red } from '@material-ui/core/colors'

// Create a theme instance.
export default createMuiTheme({
  palette: {
    primary: {
      main: '#23468c',
    },
    secondary: {
      main: '#30a7bf',
    },
    error: {
      main: red.A400,
    },
    background: {
      default: '#fff',
    },
  },
  typography: {
    fontFamily: 'Rubik, sans-serif',
    tab: {
      fontSize: '1rem',
      fontWeight: 500,
      textTransform: 'none',
      transition: 'opacity 0.1s ease-out',
      '&:hover': {
        opacity: 1,
        textDecoration: 'none'
      },
      '&:active': {
        animation: 'none',
      },
    },
  }
})
