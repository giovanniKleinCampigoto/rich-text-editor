import styled from '@emotion/styled';

export const Area = styled.div`
  padding: 16px;
  line-height: 20px;
  min-height: 350px;
  min-width: 350px;
  max-width: 1024px;
  font-size: 16px;
  font-weight: 300;
  outline: none;

  :hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;
