import React, { useState, useRef } from 'react';
import './App.css'
import AddList from './components/AddList';
import TodoLists from './components/TodoLists';
import styled, {createGlobalStyle} from "styled-components"
import moment, { Moment } from 'moment';

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0px;
    padding: 0px;
    color: #303030;
    font-weight: bold !important;
    font-style: italic !important;
    display: flex;
    justify-content: center;
    align-items: center;
    vertical-align: middle;
    background-color: #b9b9b9;
  }

`;
const Wrapper = styled.section`
  margin-top: 50px;
  width: 50vw;
  height: 80vh;
  box-shadow: 10px 10px 5px gray;
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  background-color: white;
`

const Title = styled.section`
  width: 40vw;
  margin-top: 1rem;
  height: 10vh;
  border-block-end: 4px solid rgb(92, 92, 92);
  font-size: 3rem;
  font-weight: bold;
  font-style: italic;
  text-shadow: 5px 5px 2px gray;
`

const Listwapper = styled.section`
  width: 40vw;
  height: 58vh;
  display: flex;
  justify-content: center;
  & > ul {
    padding: 0;
  }
  `
const TodoAdd = styled.section`
  width: 40vw;
  height: 12vh;
`


function App() {
  const [input, setInput] = useState({ text: '' });
  const { text } = input;
  
  const [dateInput, setDateInput] = useState({ start:null,end:null})
  const { start , end } = dateInput;

  const [list, setList] = useState([]);

  const onChange = (value:string) => {
    setInput({ ...input, text:value });
  };

  const onChangeDate = (startedAt, endedAt) => {
    setDateInput({start: startedAt, end: endedAt})
  }

  const onCreate = (index:number) => {
    const todo = {
      id: index,
      text,
      start: moment(start).format('YYYY-MM-DD').toString(),
      end: moment(end).format('YYYY-MM-DD').toString(),
    };
    setList(list.concat(todo));
    setInput({ text: '' });
    setDateInput({ start: null , end: null});
  };

  const onRemove = (index) =>{
    const newTodoList = list.filter((_, i2) => i2 !== index);
    setList(newTodoList);
  };

  console.log(moment(start).format('YYYY-MM-DD'));
  
  const onEdit = (index,text,start,end) => {
    const newList = [...list];
    newList[index].text = text;
    newList[index].start = start;
    newList[index].end = end;
    setList(newList);
  };




  return (
    <React.Fragment>
      <GlobalStyle/>
        <Wrapper>
          <Title>
            TO DO LIST
          </Title>
          <Listwapper>
          <TodoLists list={list}  onRemove={onRemove} onEdit={onEdit} />
          </Listwapper>
          <TodoAdd>
            <AddList text={text} start={start} end={end} onChange={onChange} onChangeDate={onChangeDate}onCreate={onCreate} />
          </TodoAdd> 
        </Wrapper>
      </React.Fragment>

  );
}

export default App;
