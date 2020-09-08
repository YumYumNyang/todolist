import React, { useState, useRef } from 'react';
import AddList from './components/AddList';

import TodoLists from './components/TodoLists';

function App() {
  const [input, setInput] = useState({ text: '', done: false });
  const { text, done } = input;
  const [list, setList] = useState([
    { id: 0, text: 'work1', done: false },
    { id: 1, text: 'work2', done: false },
    { id: 2, text: 'work3', done: false },
  ]);

  const onChange = e => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const nextId = useRef(4);

  const onCreate = () => {
    const todo = {
      id: nextId.current,
      text,
      done,
    };
    setList(list.concat(todo));
    setInput({ text: '', done: false });
    nextId.current += 1;
  };

  const onRemove = id => {
    setList(list.filter(todo => todo.id !== id));
  };

  const onChecked = id => {
    console.log('뭐야');
    // !todo.done
    //  ? setTodo({ id: todo.id, text: todo.text, done: false })
    //   : setTodo({ id: todo.id, text: todo.text, done: true });
  };

  return (
    <div>
      <h1>TODO - LIST</h1>
      <AddList text={text} done={done} onChange={onChange} onCreate={onCreate} />
      <TodoLists list={list} onChecked={onChecked} onRemove={onRemove} />
    </div>
  );
}

export default App;
