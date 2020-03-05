import React, { useState } from 'react';
import { MainContainer, Heading } from './TextEditorStyles';
import { TextArea, Menu } from '../../components';

const TextEditor = ({ theme }) => {
  return (
    <MainContainer>
      <Heading theme={theme}>React Text Editor</Heading>
      <Menu />
      <TextArea />
    </MainContainer>
  );
};

export default TextEditor;
