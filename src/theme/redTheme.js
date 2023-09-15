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
          backgroundColor: isDarkMode ? 'rgb(62, 88, 119)' : 'rgb(155, 202, 255)',
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(15px)',
          backgroundColor: isDarkMode ? 'rgba(0, 9, 20, 0.85)' : 'rgba(45, 112, 189, 0.85)',
          borderBottom: isDarkMode ? '1px solid rgba(71, 71, 71, 0.651)' : 'none',
        }
      }
    },
    MuiCard: {
      styleOverrides: {
        root: {
          border: isDarkMode ? '1px solid rgba(71, 71, 71, 0.651)' : 'none',
        }
      }
    },
    MuiMenu: {
      styleOverrides: {
        paper: {
          backdropFilter: 'blur(15px)',
          backgroundColor: isDarkMode ? 'rgba(26, 35, 46, 0.85)' : 'rgba(240, 240, 240, 0.85)',
          border: isDarkMode ? '1px solid rgba(71, 71, 71, 0.651)' : 'none',
        },
      }
    }
  },
})