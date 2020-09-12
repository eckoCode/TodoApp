import React, { useState } from 'react';
import './App.css';

function App() {
  
  const [todos, setTodos] = useState(['Study for some time','Take a shower','Programing is hard work']);
  const [input, setInput] = useState('');

  const addTodo = (event) =>{
    //triger when click the button
    event.preventDefault();
    setTodos([...todos, input]);
  }

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <form>
        <input value={input} onChange={event => setInput(event.target.value)}/>
        <button type="submit" onClick={addTodo}>Add Todo</button>
      </form>
      <ul>
        {todos.map(todo => (
          <li>{todo}</li>
        ))}
      </ul>
    </div>
  );
}

export default App;
