import {
  ChakraProvider, extendTheme,
} from '@chakra-ui/react';
import * as React from 'react';
import { Route, Routes } from 'react-router';
import Sample from './modules/auth/views/Login';

const App = () => {
  const theme = extendTheme({
    colors: {
      primary: {
        main: '#f5dbc9',
        button: '#f5dbc9B3',
      },
      secondary: {
        main: '#B67B5E',
        button: '#B67B5EE6',
      },
    },
  });

  return (
    <ChakraProvider theme={theme}>
      <Routes>
        <Route path="/" element={<Sample />} />
      </Routes>
    </ChakraProvider>
  );
};

export default App;
