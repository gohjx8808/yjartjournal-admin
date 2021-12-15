import {
  ChakraProvider, extendTheme,
} from '@chakra-ui/react';
import { initializeApp } from 'firebase/app';
import * as React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
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

  const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSENGER_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
  };

  initializeApp(firebaseConfig);

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
