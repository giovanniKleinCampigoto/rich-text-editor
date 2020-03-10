import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import ReactDOM from 'react-dom';

import { Area } from './TextAreaStyles';
import { debounce } from '../../utils';

const Paragraph = styled.p`
  margin: 0;
`;

const TextArea = ({ theme, bold }) => {
  const inputEl = useRef(null);
  const [focused, setFocused] = useState(false);
  const [elements, setElements] = useState([]);

  function mantainFoucsIfValue(e) {
    const { innerText } = e.target;

    if (!innerText) {
      setFocused(false);
    }
  }

  function writeHtml(innerText, keyCode) {
    const editor = document.getElementById('editor');

    if (keyCode === 13) {
      const splited = innerText.split('\n').filter(x => x !== '');
    }
  }

  function beforeInput(e) {
    console.log(e.data === '\n');
  }

  return (
    <Area
      ref={inputEl}
      id="editor"
      contentEditable
      theme={theme}
      bold={bold}
      focused={focused}
      onBeforeInput={e => beforeInput(e)}
      onFocus={() => setFocused(true)}
      onBlur={e => mantainFoucsIfValue(e)}
      onKeyUp={e => writeHtml(e.target.innerText, e.keyCode)}
    />
  );
};

export default TextArea;
