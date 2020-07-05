import { createMuiTheme, darken } from '@material-ui/core/styles'

const mainBlue = '#23468c'
const accentBlue = '#30a7bf'
const buttonUnfocusedGrey = 'rgba(0, 0, 0, 0.54)' // same as default of palette.text.secondary

export default createMuiTheme({
  palette: {
    primary: {
      main: mainBlue,
    },
    secondary: {
      main: accentBlue,
    },
    background: {
      default: 'white'
    }
  },
  typography: {
    fontFamily: "'Rubik', 'Roboto', 'Helvetica', 'Arial', sans-serif",
    fontSize: 18,
    button: {
      textTransform: 'none',
    },
  },
  overrides: {
    MuiButton: {
      textSecondary: {
        color: buttonUnfocusedGrey,
        transition: 'color 0.1s ease-out',
        '&:hover': {
          backgroundColor: 'white',
          color: mainBlue,
        },
      },
    },
  },
})
