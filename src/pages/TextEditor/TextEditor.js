import React from 'react';
import { MainContainer, Heading } from './TextEditorStyles';
import { TextArea } from '../../components';

const TextEditor = ({ theme }) => {
  return (
    <MainContainer>
      <Heading theme={theme}>React Text Editor</Heading>
      <TextArea />
    </MainContainer>
  );
};

export default TextEditor;
