import React ,{useState} from 'react';
import styled from 'styled-components';
import Button from '../style/Button';
import TodoStyle from '../style/TodoStyle';
//import InputStyle from './InputStyle';
import { Input, DatePicker } from 'antd';
import moment from 'moment';
const { RangePicker } = DatePicker;

const StyledSpan = styled.span`
  font-size: 15px;
  margin: 3vh;
  color: rgb(204, 220, 255);

`


function Todo({ todo, onRemove ,onEdit}) {
  const [done, setDone ] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [style,setStyle] = useState('none');
  const [text, setText] = useState(todo.text);
  const [start, setStart] = useState(todo.start);
  const [end, setEnd] = useState(todo.end);
  console.log(todo.end);
  console.log(todo.start);
  
  function handleEditMode(text,start,end) {
    if(isEdit) {
      onEdit(text,start,end);
      setIsEdit(false);
    } else {
      setIsEdit(true);
    }
  }
  return (
    <TodoStyle>
      {isEdit ? 
      <div>
        <Input value={text} onChange={e => setText(e.target.value)}/> 
      <RangePicker value={[moment(start),moment(end)]} onChange={(dates) => {setStart(moment(dates[0]).format('YYYY-MM-DD').toString())}}/>
      
      </div>
      :<span style={{textDecoration : style}} onClick={(e) => {
      if (done) {
        setStyle('none');  
        setDone(false);}
      else{
        setStyle('line-through'); 
        setDone(true); 
      }
      }}>
        - 
        {todo.text}
      <StyledSpan> 
        {todo.start}
      ~ {todo.end}
      </StyledSpan>  
      </span>}
      <Button  onClick={() => onRemove(todo.id)}>DELETE</Button>
      <Button  onClick={() => handleEditMode(text,start,end)}>EDIT</Button>

    </TodoStyle>
  );
}




function TodoLists({ list, onRemove, onEdit }) {
  return (
      <ul>
        {list.map((todo,index) => (
          <Todo 
            todo={todo}
            key={index}
            onRemove={() => onRemove(index)}
            onEdit={(text,start,end) => onEdit(index, text,start,end)}
          />
        ))}
      </ul>
  );
}

export default TodoLists;
