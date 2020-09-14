import { on } from "process";

import React from 'react'
import styled from 'styled-components';


const Input = styled.input`
  width: 50%;
  height: 5vh;
  border: none;
  margin: 10px;
  box-shadow: 5px 5px 5px gray;
  background-color: rgb(223, 223, 223);
  &:hover {
    width: 55%;
    height: 6vh;
    background-color: rgb(204, 220, 255);
  }
`

function InputStyle({ ...rest}){
    return <Input {...rest}></Input>}


export default InputStyle;