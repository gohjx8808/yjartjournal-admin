import {
  ChakraProvider, theme,
} from '@chakra-ui/react';
import * as React from 'react';
import { Route, Routes } from 'react-router';
import Sample from './modules/auth/views/Login';

const App = () => (
  <ChakraProvider theme={theme}>
    <Routes>
      <Route path="/" element={<Sample />} />
    </Routes>
  </ChakraProvider>
);

export default App;
