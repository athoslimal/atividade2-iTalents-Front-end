import React, { useState } from 'react';
import './App.css'; // Importando o arquivo CSS

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Contador: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Adicionar</button>
      <button onClick={() => setCount(count - 1)}>Remover</button>
    </div>
  );
}

export default Counter;
