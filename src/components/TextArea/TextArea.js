import React from 'react';

import styled from '@emotion/styled';

const Area = styled.textarea`
  min-height: 350px;
  min-widht: 350px;
`;

const TextArea = ({ theme }) => {
  return <Area theme={theme} />;
};

export default TextArea;
