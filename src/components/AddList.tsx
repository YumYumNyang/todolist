import React from 'react';

function AddList({ text, done, onChange, onCreate }) {
  return (
    <div>
      <input name="text" onChange={onChange} value={text} />
      <button onClick={onCreate}>추가</button>
    </div>
  );
}
export default AddList;
