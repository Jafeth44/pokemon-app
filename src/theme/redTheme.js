import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

export const redTheme  = (isDarkMode) =>  createTheme({

  palette: {
    mode: isDarkMode ? 'dark' : 'light',
    primary: {
      main: '#2d70bd'
    },
    secondary: {
      main: '#843838'
    },
    error: {
      main: red.A400
    }
  },
  components: {
    MuiCardContent: {
      styleOverrides: {
        root: {
          backgroundColor: isDarkMode ? 'rgb(62, 88, 119)' : 'rgb(155, 202, 255)'
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(15px)',
          backgroundColor: isDarkMode ? 'rgba(0, 9, 20, 0.85)' : 'rgba(45, 112, 189, 0.85)'
        }
      }
    }
  },
})