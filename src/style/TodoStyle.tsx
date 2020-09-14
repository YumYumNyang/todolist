import React from 'react';
import styled from 'styled-components';

const Todo = styled.li`

    font-size: 30px;
    padding: 2vh;
    width: 40vw;
    height: 10vh;
    border-block-end: 1px solid gray;
    list-style: none;
    text-align : left;
    display : flex;
    align-items:center;
    & > span {
        width: 30vw;
    }

    & > Button {
        display: none;
    }

    &:hover Button {
        display : inline;
    }

`
function TodoStyle({children, ...rest}){
    return <Todo {...rest}>{children}</Todo>;
}

export default TodoStyle;