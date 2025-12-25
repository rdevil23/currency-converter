import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'San Francisco Pro Text, sans-serif',
    h2: {
      fontSize: '2rem',
      '@media (max-width:600px)': {
        fontSize: '1.25rem',
        fontWeight: 700
      }
    },
    body1: {
      fontSize: '1rem',
      '@media (max-width:600px)': {
        fontSize: '0.875rem'
      }
    }
  },
  palette: {
    mode: 'light',
    background: {
      default: '#f3f3f3',
      paper: '#ffffff'
    },
    text: {
      primary: '#000',
      secondary: '#706e6eff'
    },
    warning: {
      main: '#fcd502',
      contrastText: '#fff'
    }
  },
  components: {
    MuiInput: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
          border: '4px solid #000',
          padding: '10px',
          width: '100%',
          '@media (max-width:600px)': {
            padding: '8px'
          }
        }
      }
    },
    MuiCheckbox: {
      styleOverrides: {
        root: {
          color: '#fcd502',
          '&.Mui-checked': {
            color: '#fcd502'
          }
        }
      }
    },
    MuiRadio: {
      styleOverrides: {
        root: {
          padding: 6,
          color: '#000',
          '& .MuiSvgIcon-root': {
            width: 22,
            height: 22,
            borderRadius: '50%',
            boxShadow: 'none',
            transition: 'all 0.12s ease'
          },
          '&.Mui-checked .MuiSvgIcon-root': {
            backgroundColor: '#fcd502',
            color: '#000'
          }
        }
      }
    },
    MuiFormControlLabel: {
      styleOverrides: {
        root: {
          margin: 0,
          '& .MuiFormControlLabel-label': {
            fontSize: 14,
            color: '#000',
            fontFamily: 'San Francisco Pro Text, sans-serif',
            '@media (max-width:600px)': {
              fontSize: 12,
              margin: 0,
              padding: 0
            }
          }
        }
      }
    }
  },
  breakpoints: {
    values: {
      xs: 320,
      sm: 384,
      md: 600,
      lg: 1200,
      xl: 1536
    }
  }
});

export default theme;
