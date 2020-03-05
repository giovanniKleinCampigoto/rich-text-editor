import React, { useState, useRef } from 'react';
import ReactDOM from 'react-dom';

import { Area } from './TextAreaStyles';
import { debounce } from '../../utils';

const paragraphSyle = {
  margin: '0'
};

const TextArea = ({ theme, bold }) => {
  const inputEl = useRef(null);
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState('');

  function mantainFoucsIfValue(e) {
    const { value } = e.target;

    if (!value) {
      setFocused(false);
    }
  }

  function writeHtml(innerText) {
    const editor = document.getElementById('editor');

    if (innerText.trim().length === 0) {
      console.log('here');
      ReactDOM.unmountComponentAtNode(editor);
      return;
    }

    const node = React.createElement('p', { style: paragraphSyle }, innerText);
    ReactDOM.render(node, editor);
  }

  function selection() {}

  return (
    <Area
      ref={inputEl}
      id="editor"
      contentEditable={true}
      theme={theme}
      bold={bold}
      focused={focused}
      // onSelect={e => console.log(window.getSelection().toString())}
      onFocus={() => setFocused(true)}
      onBlur={e => mantainFoucsIfValue(e)}
      onInput={e => debounce(writeHtml, e.target.innerText, 300)}
    />
  );
};

export default TextArea;
