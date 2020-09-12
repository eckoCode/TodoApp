import React, { useState } from 'react';
import './App.css';

function App() {
  
  const [todos, setTodos] = useState(['Study for some time','Take a shower']);


  return (
    <div className="App">
      <h1>Hello World!</h1>
      <input/>
      <button>Ez</button>

      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
