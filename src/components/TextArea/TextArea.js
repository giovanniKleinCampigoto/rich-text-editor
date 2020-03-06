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

  function mantainFoucsIfValue(e) {
    const { innerText } = e.target;

    if (!innerText) {
      setFocused(false);
    }
  }

  function writeHtml(innerText, keyCode) {
    const editor = document.getElementById('editor');

    if (innerText.trim().length === 0) {
      ReactDOM.unmountComponentAtNode(editor);
      return;
    }

    if (keyCode === 13) {
      renderNewParagraphIfEnterWasPressed(innerText, editor);
    }
  }

  function renderNewParagraphIfEnterWasPressed(innerText, editor) {
    const allTextElements = document.querySelectorAll('.text-wrapper');

    if (!allTextElements.length) {
      ReactDOM.render(
        <Paragraph className="text-wrapper">{innerText}</Paragraph>,
        editor,
        createElementReference
      );
    }
  }

  function createElementReference() {}

  function changeTextFormatting() {
    //   const selection = window.getSelection().toString();
    //   const editor = document.getElementById('editor');
  }

  return (
    <Area
      ref={inputEl}
      id="editor"
      contentEditable={true}
      theme={theme}
      bold={bold}
      focused={focused}
      onSelect={e => changeTextFormatting()}
      onFocus={() => setFocused(true)}
      onBlur={e => mantainFoucsIfValue(e)}
      onKeyUp={e => writeHtml(e.target.innerText, e.keyCode)}
    />
  );
};

export default TextArea;
