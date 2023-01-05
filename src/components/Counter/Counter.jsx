import React, { useState } from 'react';

function Counter() {
  const [count, updateZnach] = useState(0)

  function Icrement() {
    updateZnach(count + 1)
  }
  function Decrement() {
    updateZnach(count - 1)
  }

  return (
    <div className="App">
      <p>{count}</p>
      <div className='buttons'>
        <button onClick={Icrement}>Icrement</button>
        <button onClick={Decrement}>Decrement</button>
      </div>
    </div>
  );
}

export default Counter;
