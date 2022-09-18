import React from 'react'
import TitlePage from './pages/TitlePage'
// import Nav from './components/NavBar/Nav'
import Home from './pages/Home';
import drinkCard from './components/Card/Card';
import { ThemeProvider, createTheme } from '@mui/material/styles';


const theme = createTheme({
  palette: {
    primary: {
      main: '#ffbe0b',
    },
    primaryVar: {
      main: '#ff006e',
    },
    secondary: {
      main: '#8338ec',
    },
    secondaryVar: {
      main: '#3a86ff',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
      'Lobster',
      'cursive'
    ].join(','),
  },
});

const App = () => {
  return (
    <>
    <ThemeProvider theme={theme}>
      {/* <TitlePage/> */}
      <Home/>
    </ThemeProvider>
    </>
  )
}

export default App