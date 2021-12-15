import {
  ChakraProvider, extendTheme,
} from '@chakra-ui/react';
import * as React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Route, Routes } from 'react-router';
import Sample from './modules/auth/views/Login';
import Router from './modules/Router';

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

  const queryClient = new QueryClient();

  return (
    <ChakraProvider theme={theme}>
      <QueryClientProvider client={queryClient}>
        <Router />
      </QueryClientProvider>
    </ChakraProvider>
  );
};

export default App;
