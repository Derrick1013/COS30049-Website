import { createTheme } from '@mui/material/styles';

// Define a professional color palette inspired by the mockups
const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#007BFF', // A clean, modern blue
    },
    secondary: {
      main: '#6c757d', // A neutral grey for secondary text/elements
    },
    background: {
      default: '#F8F9FA', // A very light grey for the page background
      paper: '#FFFFFF',   // White for cards and surfaces
    },
    text: {
      primary: '#212529',   // Dark grey for primary text for better readability
      secondary: '#6c757d', // Lighter grey for secondary text
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif', // A modern, clean font
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
    borderRadius: 8, // Slightly rounded corners for a modern feel
  },
  components: {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: '#FFFFFF',
          color: '#212529',
          boxShadow: '0 1px 3px rgba(0,0,0,0.1)', // Subtle shadow
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'none', // More readable button text
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
          boxShadow: '0 4px 12px rgba(0,0,0,0.08)', // A soft, modern shadow for cards
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