import {
  ChakraProvider, extendTheme,
} from '@chakra-ui/react';
import { initializeApp } from 'firebase/app';
import { QueryClient, QueryClientProvider } from 'react-query';
import Router from './modules/router/Router';

const App = () => {
  const theme = extendTheme({
    colors: {
      primary: {
        50: '#FBF1EA',
        100: '#F3D7C4',
        200: '#EBBE9E',
        300: '#E3A478',
        400: '#DB8B52',
        500: '#f3d4be',
        600: '#e9b895',
        700: '#7F441A',
        800: '#542D12',
        900: '#2A1709',
      },
      secondary: {
        50: '#ffebe3',
        100: '#eccfc6',
        200: '#d9b3a5',
        300: '#c89783',
        400: '#b77e61',
        500: '#9e5e48',
        600: '#7c4537',
        700: '#592d26',
        800: '#381715',
        900: '#1b0001',
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
