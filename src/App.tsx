import {
  ChakraProvider, extendTheme,
} from '@chakra-ui/react';
import { initializeApp } from 'firebase/app';
import * as React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import Router from './modules/router/Router';

const App = () => {
  const theme = extendTheme({
    colors: {
      primary: {
        // 50: '#fff0e4',
        500: '#f3d4be',
        600: '#e9b895',
        // 300: '#e19c6b',
        // 400: '#d87f42',
        // 500: '#c06529',
        // 600: '#954f20',
        // 700: '#6b3916',
        // 800: '#41210c',
        // 900: '#1a0900',
      },
      secondary: {
        50: '#ffebe3',
        // 100: '#ecd3c6',
        // 200: '#d9b6a5',
        // 300: '#c89a83',
        500: '#b77e61',
        600: '#9e6448',
        // 600: '#7c4e37',
        // 700: '#593726',
        // 800: '#382015',
        // 900: '#1b0800',
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
