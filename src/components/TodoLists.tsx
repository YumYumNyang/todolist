import React ,{useState} from 'react';

function Todo({ todo, onRemove ,onEdit}) {
  const [done, setDone ] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [style,setStyle] = useState('none');
  const [text, setText] = useState(todo.text);


 function handleEditMode(text) {
   if(isEdit) {
    onEdit(text);
    setIsEdit(false);
  } else {
    setIsEdit(true);
  }
 }
  return (
    <div className="todo">
      {isEdit ? <input value={text} onChange={e => setText(e.target.value)}/> :<span style={{textDecoration : style}} onClick={() => {
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
        
      </span>}
      <button className="todo_btn" onClick={() => onRemove(todo.id)}>DELETE</button>
      <button className="todo_btn" onClick={() => handleEditMode(text)}>EDIT</button>

    </div>
  );
  //<button onClick={() => onToggle(todo.id)}>edit</button>
}
function TodoList({ list, onRemove, onEdit }) {
  return (
    <div>
      <ul>
        {list.map((todo,index) => (
          <Todo
            todo={todo}
            key={index}
            onRemove={() => onRemove(index)}
            onEdit={(text) => onEdit(index, text)}
          />
        ))}
      </ul>
    </div>
  );
}
export default TodoList;
