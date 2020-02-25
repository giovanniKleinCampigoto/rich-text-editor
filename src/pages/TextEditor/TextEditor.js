import React from 'react';
import { MainContainer, Heading } from './TextEditorStyles';

const TextEditor = ({ theme }) => {
  return (
    <MainContainer>
      <Heading theme={theme}>React Text Editor</Heading>
    </MainContainer>
  );
};

export default TextEditor;
