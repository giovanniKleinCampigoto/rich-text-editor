import React, { useState } from 'react';
import { MainContainer, Heading } from './TextEditorStyles';
import { TextArea, Menu } from '../../components';

const TextEditor = ({ theme }) => {
  return (
    <MainContainer>
      <TextArea />
    </MainContainer>
  );
};

export default TextEditor;
