import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const redTheme = createTheme({
  palette: {
    primary: {
      main: '#542222'
    },
    secondary: {
      main: '#843838'
    },
    error: {
      main: red.A400
    }
  }
})