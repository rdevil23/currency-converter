import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  typography: {
    fontFamily: 'San Francisco Pro Text, sans-serif'
  },
  breakpoints: {
    values: {
      xs: 320,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536
    }
  },
  components: {
    MuiInput: {
      styleOverrides: {
        root: {
          borderRadius: '4px',
          padding: '10px',
          width: '100%',
          maxWidth: '100%',
          '@media (max-width: 600px)': {
            padding: '8px'
          }
        }
      }
    }
  }
});

export default theme;
