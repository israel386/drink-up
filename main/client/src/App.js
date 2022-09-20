import React from 'react'
import TitlePage from './pages/TitlePage'
import Home from './pages/Home';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"


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
    error: {
      main: "#e63946"
    }
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
    <ThemeProvider theme={theme}>
      <Router>
        <>
         <Routes>
            <Route exact path='/login' element={<TitlePage/>}/>
            <Route exact path='/' element={<Home/>}/>
          </Routes>
        </>
      </Router>
    </ThemeProvider>
  )
}

export default App