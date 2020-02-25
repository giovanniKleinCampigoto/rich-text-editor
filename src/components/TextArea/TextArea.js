import React, { useState } from 'react';
import ReactDOM from 'react-dom';

import { Area } from './TextAreaStyles';
import { debounce } from '../../utils';

const TextArea = ({ theme, bold }) => {
  const [focused, setFocused] = useState(false);
  const [value, setValue] = useState('');

  function mantainFoucsIfValue(e) {
    const { value } = e.target;

    if (!value) {
      setFocused(false);
    }
  }

  function writeHtml(value) {
    console.log(value);
    // const node = React.createElement('p', {}, value);
    // console.log(node);
    // console.log(document.getElementById('editor'));
    // ReactDOM.render(node, document.getElementById('editor'));
  }

  return (
    <Area
      id="editor"
      contentEditable={true}
      theme={theme}
      bold={bold}
      focused={focused}
      onChange={e => debounce(writeHtml, e.target.value, 300)}
      onFocus={() => setFocused(true)}
      onBlur={e => mantainFoucsIfValue(e)}
    />
  );
};

export default TextArea;
