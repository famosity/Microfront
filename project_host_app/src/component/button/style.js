import styled from 'styled-components';

export const ButtonSelectorWrapper = styled.div`
  display: flex;
  gap: 16px;
  margin-top: 20px;
`;

export const Button = styled.button`
  background-color: #0074D9;
  color: #fff;
  font-size: 16px;
  padding: 10px 20px;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: #0056a0;
  }

  &.selected {
    background-color: #333;
    cursor: not-allowed;
  }
`;