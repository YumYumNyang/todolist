import React from 'react';
import './AddList.css';
function AddList({ text, onChange, onCreate }) {
  return (
    <div>
      <input className='input' name="text" onChange={(e) => onChange(e.target.value)} value={text} />
      <button onClick={onCreate}>ADD</button>
    </div>
  );
}
export default AddList;
