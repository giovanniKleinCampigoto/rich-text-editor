import styled from '@emotion/styled';

export const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1024px;
  margin: 0 auto;
`;

export const Heading = styled.h1`
  color: ${({ theme }) => theme.text.headings.color || '#00000'};
  font-size: ${({ theme }) => theme.text.headings.size || '16px'};
`;
