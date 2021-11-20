import { ThemeProvider } from '@mui/system';
import React from 'react';
import theme from './theme';

import './App.css';
import Links from './routes/Links';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Links/>
    </ThemeProvider>
  );
}

export default App;
