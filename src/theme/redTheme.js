import { createTheme } from '@mui/material';
import { red } from '@mui/material/colors';

const primaryDark = 'rgba(65, 105, 225, 0.568)';
const primaryWhite = 'rgba(135, 206, 250, 0.568)';
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
          backgroundColor: isDarkMode ? primaryDark : primaryWhite,
        }
      }
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          backdropFilter: 'blur(15px)',
          backgroundColor: isDarkMode ? primaryDark : primaryWhite,
          color: isDarkMode ? 'white' : 'black',
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
          backgroundColor: isDarkMode ? primaryDark : primaryWhite,
          border: isDarkMode ? '1px solid rgba(71, 71, 71, 0.651)' : 'none',
        },
      }
    },
    MuiDrawer: {
      styleOverrides: {
        paper: {
          backdropFilter: 'blur(35px)',
          backgroundColor: isDarkMode ? 'rgba(22, 30, 53, 0.842)' : 'rgba(205, 235, 253, 0.863)',
        }
      }
    }
  },
})