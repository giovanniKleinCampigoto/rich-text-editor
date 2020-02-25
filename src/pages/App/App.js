import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { theme } from '../../constants/theme';

function App() {
  return <ThemeProvider theme={theme}></ThemeProvider>;
}

export default App;
