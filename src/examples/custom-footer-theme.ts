import { createTheme } from "@mui/material/styles";

const CUSTOM_FOOTER_THEME = createTheme({
  palette: {
    primary: {
      main: '#000', // blue
      contrastText: '#fff',
    },
    secondary: {
      main: '#ff4081', // pink
      contrastText: '#fff',
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: '12px',
          padding: '8px 20px',
          textTransform: 'none',
          fontWeight: 600,
          fontSize: '0.95rem',
          boxShadow: 'none',
          transition: 'background-color 0.3s ease',
          '&:hover': {
            boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          },
        },
        containedPrimary: {
          backgroundColor: '#000',
          color: "#000",
          '&:hover': {
            backgroundColor: '#000',
            color: "#fff",
          },
        },
        containedSecondary: {
          backgroundColor: '#ff4081',
          '&:hover': {
            backgroundColor: '#e91e63',
          },
        },
      },
    },
  },
});

export default CUSTOM_FOOTER_THEME;
