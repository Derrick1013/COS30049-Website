import { createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#007BFF', 
    },
    secondary: {
      main: '#6c757d', 
    },
    background: {
      default: '#F8F9FA', 
      paper: '#FFFFFF',   
    },
    text: {
      primary: '#212529',   
      secondary: '#6c757d', 
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif', 
    h4: {
      fontWeight: 700,
      color: '#212529',
    },
    h5: {
      fontWeight: 600,
      color: '#212529',
    },
    h6: {
      fontWeight: 600,
      color: '#343a40',
    },
    body1: {
      color: '#495057',
    },
  },
  shape: {
    borderRadius: 8, 
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          color: '#212529',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)', 
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', 
          borderRadius: 8,
          fontWeight: 600,
        },
        contained: {
          boxShadow: 'none',
          '&:hover': {
            boxShadow: 'none',
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)', 
          border: '1px solid #E9ECEF',
        },
      },
    },
    MuiCard: {
        styleOverrides: {
          root: {
            boxShadow: '0 4px 12px rgba(0,0,0,0.08)',
            border: '1px solid #E9ECEF',
          },
        },
      },
  },
});

export default theme;