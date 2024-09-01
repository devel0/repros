import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Box, createTheme, CssBaseline, ThemeProvider, Typography } from '@mui/material';

function App() {
  const theme = React.useMemo(() => {
    return createTheme(
      {
        palette: {
          mode: 'dark'
        }
      }
    )
  }, [])

  return (
    <ThemeProvider theme={theme}>
      <Box>
        <CssBaseline />
        
        <Typography sx={{ fontSize: '2rem' }}>
          Some
        </Typography>
      </Box>
    </ThemeProvider>
  );
}

export default App;
