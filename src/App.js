import React, { useState } from "react";
import './App.css';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  return (
    <div className="App">
      <header>
        <h1>todo list</h1>
      </header>
      <AddTodo todos={todos} setTodos={setTodos}/>
      <TodoList todos={todos} />
    </div>
  );
}

export default App;
