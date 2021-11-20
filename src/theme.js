import {createTheme, responsiveFontSizes} from '@mui/material'
import {lighten} from "@mui/system/colorManipulator";

const black = '#000000'
const blackSecondary = '#1F2021'
const white = '#FFFFFF'
export const inputLabelColor = '#B2B5BD'
export const backgroundMain = black
export const backgroundSecondary = blackSecondary

const primaryActionColor = '#4780D8'

const theme = createTheme({
  typography: {
    allVariants: {
      color: white,
      fontFamily: 'Inter'
    }
  },
  palette: {
    mode: 'dark',
    common: {
      red: "#E25F60",
    },
    action: {
      active: white,
      hover: 'rgba(255, 255, 255, 0.08)',
      selected: 'rgba(255, 255, 255, 0.16)',
      disabled: 'rgba(255, 255, 255, 0.3)',
      disabledBackground: 'rgba(255, 255, 255, 0.12)'
    },
    background: {
      default: backgroundMain,
      paper: backgroundSecondary
    },
    primary: {
      main: primaryActionColor
    },
    secondary: {
      main: '#e70202'
    },
    button: {
      submit: {
        main: '#4780D8',
        light: lighten( '#4780D8', 0.1)
      },
      cancel: {
        main: '#303131',
        light: lighten( '#303131', 0.1)
      },
    },
    text: {
      primary: white,
      secondary: inputLabelColor,
      disabled: 'rgba(0, 0, 0, 0.38)' // Guide color
    }
  },

  components: {
    MuiAppBar: {
      defaultProps: {
        enableColorOnDark: true
      },
    },
  },
})

export default responsiveFontSizes(theme)