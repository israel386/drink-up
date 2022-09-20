// import React from 'react'
// import TitlePage from './pages/TitlePage'
// import Home from './pages/Home';
// import { ThemeProvider, createTheme } from '@mui/material/styles';
// import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import {
  ApolloClient,
  InMemoryCache,
  ApolloProvider,
  createHttpLink,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';

import Home from './pages/Home';
import Detail from './pages/Detail';
import NoMatch from './pages/NoMatch';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Nav from './components/Nav';
import { StoreProvider } from './utils/GlobalState';
import Success from './pages/Success';
import OrderHistory from './pages/OrderHistory';


// MOISES BRANCH CODE-----------
// const theme = createTheme({
//   palette: {
//     primary: {
//       main: '#ffbe0b',
//     },
//     primaryVar: {
//       main: '#ff006e',
//     },
//     secondary: {
//       main: '#8338ec',
//     },
//     secondaryVar: {
//       main: '#3a86ff',
//     },
//     error: {
//       main: "#e63946"
//     }
//   },
//   typography: {
//     fontFamily: [
//       '-apple-system',
//       'BlinkMacSystemFont',
//       '"Segoe UI"',
//       'Roboto',
//       '"Helvetica Neue"',
//       'Arial',
//       'sans-serif',
//       '"Apple Color Emoji"',
//       '"Segoe UI Emoji"',
//       '"Segoe UI Symbol"',
//       'Lobster',
//       'cursive'
//     ].join(','),
//   },
// });

const httpLink = createHttpLink({
  uri: '/graphql',
});

const authLink = setContext((_, { headers }) => {
  const token = localStorage.getItem('id_token');
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache(),
});

function App() {
  return (
    // MOISES BRANCH CODE-----------
  //   <ThemeProvider theme={theme}>
  //     <Router>
  //       <>
  //        <Routes>
  //           <Route exact path='/login' element={<TitlePage/>}/>
  //           <Route exact path='/' element={<Home/>}/>
  //         </Routes>
  //       </>
  //     </Router>
  //   </ThemeProvider>
  // )
    <ApolloProvider client={client}>
      <Router>
        <div>
          <StoreProvider>
            <Nav />
            <Routes>
              <Route 
                path="/" 
                element={<Home />} 
              />
              <Route 
                path="/login" 
                element={<Login />} 
              />
              <Route 
                path="/signup" 
                element={<Signup />} 
              />
              <Route 
                path="/success" 
                element={<Success />} 
              />
              <Route 
                path="/orderHistory" 
                element={<OrderHistory />} 
              />
              <Route 
                path="/products/:id" 
                element={<Detail />} 
              />
              <Route 
                path="*" 
                element={<NoMatch />} 
              />
            </Routes>
          </StoreProvider>
        </div>
      </Router>
    </ApolloProvider>
  );
}

export default App;
