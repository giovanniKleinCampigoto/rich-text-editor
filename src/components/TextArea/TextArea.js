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
      const splittedText = innerText.split('\n').filter(x => x !== '');
      const elements = splittedText.map((text, index) => (
        <Paragraph
          key={`text-${index}`}
          id={`text-${index}`}
          onClick={() => console.log(`text-${index} was clicked`)}
        >
          {text}
        </Paragraph>
      ));

      console.log(elements);

      ReactDOM.render(elements, editor);
    }
  }

  return (
    <Area
      ref={inputEl}
      id="editor"
      contentEditable
      theme={theme}
      bold={bold}
      focused={focused}
      onFocus={() => setFocused(true)}
      onBlur={e => mantainFoucsIfValue(e)}
      onKeyUp={e => writeHtml(e.target.innerText, e.keyCode)}
    />
  );
};

export default TextArea;
