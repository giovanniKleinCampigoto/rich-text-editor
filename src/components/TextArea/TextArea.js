import React, { useState, useRef, useEffect } from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';

import { Area } from './TextAreaStyles';
import { debounce } from '../../utils';

const Paragraph = styled.p`
  margin: 0;
`;

const Title = styled.h3`
  font-size: 26px;
`;

const TextArea = ({ theme, bold }) => {
  const inputEl = useRef(null);
  const [paragraphs, setParagraphs] = useState([]);
  const [sections, setSections] = useState([]);
  const [currentText, setCurrentText] = useState('');

  useEffect(() => {
    createInitialElements();
  });

  useEffect(() => {
    if (currentText.length) {
      updateTitle();
    }
  }, [currentText]);

  function createInitialElements() {
    const editor = document.getElementById('editor');

    const title = <Title id="title" />;
    ReactDOM.render(title, editor);
  }

  function beforeInputHandler(e) {
    const character = e.data;

    e.preventDefault();
    setCurrentText(prevState => {
      return prevState + character;
    });
  }

  function updateTitle() {
    const title = document.querySelector('#title');
    ReactDOM.render(currentText, title);
    caretHanlder();
  }

  function onKeyDown(e) {
    if (e.key === 'Backspace') {
      console.log(window.getSelection());
    }
  }

  function caretHanlder() {
    const editor = document.getElementById('editor');

    let range, selection;
    range = document.createRange();
    range.selectNodeContents(editor);
    range.collapse(false);
    selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
  }

  return (
    <Area
      ref={inputEl}
      id="editor"
      contentEditable
      theme={theme}
      bold={bold}
      onKeyDown={e => onKeyDown(e)}
      onBeforeInput={e => beforeInputHandler(e)}
    />
  );
};

export default TextArea;
