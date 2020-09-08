import React from 'react';

function AddList({ todo, onChange, onCreate }) {
  return (
    <div>
      <input name="text" placeholder="할일입력" onChange={onChange} value={todo.text} />
      <button onClick={onCreate}>추가</button>
    </div>
  );
}
export default AddList;
