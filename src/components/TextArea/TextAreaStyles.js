import styled from '@emotion/styled';

function chooseBorderColor(theme, focused) {
  return focused ? theme.colors.primary : theme.borders.default;
}

export const Area = styled.div`
  padding: 16px;
  line-height: 20px;
  min-height: 350px;
  min-width: 350px;
  max-width: 1024px;
  font-size: 16px;
  font-weight: 300;
  outline: none;
  border: 1px solid
    ${({ theme, focused }) => chooseBorderColor(theme, focused) || '#0000'};
  border-radius: 4px;

  :hover {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;
