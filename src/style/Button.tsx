import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  margin: 10px;
  border: none;
  height: 5vh;
  font-size: 15px;
  color: white;
  background-color: rgb(68, 68, 68);

  &:hover {
    background-color: rgb(104, 138, 230);
  }
`;

function Button({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}

export default Button;
