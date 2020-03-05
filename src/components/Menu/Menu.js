import React from 'react';

const Menu = ({ onBold }) => {
  return (
    <ul>
      <button onClick={onBold}>bold</button>
    </ul>
  );
};

export default Menu;
