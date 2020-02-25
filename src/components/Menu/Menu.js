import React from 'react';

const Menu = ({ onBold }) => {
  function setBold() {}

  return (
    <ul>
      <li onClick={setBold}>bold</li>
    </ul>
  );
};

export default Menu;
