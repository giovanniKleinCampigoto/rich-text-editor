import React from 'react';
import { ThemeProvider } from 'emotion-theming';
import { theme } from '../../constants/theme';
import TextEditor from '../TextEditor';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <TextEditor theme={theme} />
    </ThemeProvider>
  );
}

export default App;
