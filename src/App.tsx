import React, { useState, useRef } from 'react';
import './App.css'
import AddList from './components/AddList';
import TodoLists from './components/TodoLists';

function App() {
  const [input, setInput] = useState({ text: '' });
  const { text } = input;
  const [list, setList] = useState([]);

  const onChange = (value:string) => {
    setInput({ ...input, text:value });
  };


  const onCreate = (index:number) => {
    const todo = {
      id: index,
      text,
    };
    setList(list.concat(todo));
    setInput({ text: '' });
  };

  const onRemove = (index) => {
    const newTodo = list;
    newTodo.splice(index, 1);
    setList(newTodo);
  };

  
  const onEdit = (index,text) => {
    const newList = [...list];
    newList[index].text = text;
    setList(newList);
  }

  return (
    <div className="wrapper">
      <section className="todo_title">
        TO DO LIST
      </section>
      <section className="todo_list">
      <TodoLists list={list}  onRemove={onRemove} onEdit={onEdit} />
      </section>
      <section className="todo_add">
        <AddList text={text} onChange={onChange} onCreate={onCreate} />
      </section>
    </div>
  );
}

export default App;
