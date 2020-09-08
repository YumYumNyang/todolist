import React, { useState, useRef } from 'react';
import AddList from './components/AddList';

import TodoLists from './components/TodoLists';

function App() {
  const [input, setInput] = useState('');
  //const { text } = input;
  const [todo, setTodo] = useState({ id: 0, text: '', done: false });
  const [list, setList] = useState([{ id: 0, text: '', done: false }]);
  const onChange = e => {
    const { todo } = e.target.value;
    setInput(todo);
  };

  const nextId = useRef(0);

  const onCreate = () => {
    const todo = {
      id: nextId.current,
      text: '',
      done: false,
    };
    setList(list.concat(todo));
    setInput('');
    nextId.current += 1;
  };

  const onRemove = id => {
    setList(list.filter(todo => todo.id !== id));
  };

  const onChecked = id => {
    !todo.done
      ? setTodo({ id: todo.id, text: todo.text, done: false })
      : setTodo({ id: todo.id, text: todo.text, done: true });
  };

  return (
    <div>
      <h1>TODO - LIST</h1>
      <AddList todo={todo} onChange={onChange} onCreate={onCreate} />
      <TodoLists list={list} onChecked={onChecked} onRemove={onRemove} />
    </div>
  );
}

export default App;
