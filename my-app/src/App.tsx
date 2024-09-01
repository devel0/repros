import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Box, createTheme, CssBaseline, ThemeProvider, Typography } from '@mui/material';
import { blue, green, grey, red } from '@mui/material/colors';
import { useTimeout } from 'usehooks-ts';
import { HorizontalTicker } from './lib';

const SEC_PER_CHAR = 0.1
const shortText = 'Some'
const text1 = 'BEGIN this is the text1 sample text, below there is the text2 sample text, these lines differs in length. END.'
const text2 = 'BEGIN in 5sec the third line will change from test1 to test2 and overlap happens. This is a filling text to go more longer. END.'

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

  const [text3, setText3] = useState(text1)
  const [info, setInfo] = useState('Wait 5 sec to switch 3th line')
  const [infoSwitched, setInfoSwitched] = useState(false)

  useTimeout(() => {
    console.log('switing text')
    setInfo('Third line text switched')
    setInfoSwitched(true)

    setText3(text2)
  }, 5000)

  return (
    <ThemeProvider theme={theme}>
      <Box sx={{
        p: 1
      }}>
        <CssBaseline />

        <Box sx={{
          // display: 'flex'
          border: '1px solid white',
          background: grey[800],
          width: '100%'
        }}>
          <HorizontalTicker duration={SEC_PER_CHAR * 1000 * text1.length}>

            <Box>
              <Typography
                noWrap
                sx={{
                  background: blue[900],
                  fontSize: '2rem'
                }}>
                {text1}
              </Typography>
            </Box>

          </HorizontalTicker>
          <br />

          <HorizontalTicker duration={SEC_PER_CHAR * 1000 * text2.length}>

            <Box>
              <Typography
                noWrap
                sx={{
                  background: blue[900],
                  fontSize: '2rem'
                }}>
                {text2}
              </Typography>
            </Box>

          </HorizontalTicker>
          <br />

          <HorizontalTicker duration={SEC_PER_CHAR * 1000 * text3.length}>

            <Box>
              <Typography
                noWrap
                sx={{
                  background: blue[900],
                  fontSize: '2rem'
                }}>
                {text3}
              </Typography>
            </Box>

          </HorizontalTicker>

          <br />

          <Typography
            sx={{
              background: infoSwitched ? red[600] : green[800],
              fontSize: '2rem'
            }}>
            {info}
          </Typography>

        </Box>
      </Box >
    </ThemeProvider >
  );
}

export default App;
