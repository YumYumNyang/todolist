import React from 'react';

function Todo({ todo, onChecked, onRemove }) {
  return (
    <div>
      <span style={{ color: todo.done ? 'grey' : 'black' }} onClick={() => onChecked()}>
        {todo.text}
      </span>
      <button onClick={() => onRemove(todo.id)}>delete</button>
    </div>
  );
  //<button onClick={() => onToggle(todo.id)}>edit</button>
}
function TodoList({ list, onChecked, onRemove }) {
  return (
    <div>
      <ul>
        {list.map(todo => (
          <Todo
            todo={todo}
            key={todo.id}
            onChecked={onChecked}
            onRemove={onRemove}
            //onToggle={onToggle}
          />
        ))}
      </ul>
    </div>
  );
}
export default TodoList;
