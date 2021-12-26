import { createTheme, colors } from '@material-ui/core'
import { shadows } from './shadows'
import { typography } from './typography'

const Theme = createTheme({
  palette: {
    background: {
      default: '#F4F6F8',
      paper: colors.common.white,
    },
    primary: {
      contrastText: '#ffffff',
      main: '#808080',
    },
    secondary: {
      main: '#000',
    },
    text: {
      primary: '#808080',
      secondary: '#6b778c',
    },
  },
  typography,
})

export default Theme