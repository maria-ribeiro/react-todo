import React, { useState } from "react";
import './App.css';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  console.log(todos);
  return (
    <div className="App">
      <header>
        <h1>todo list</h1>
      </header>
      <AddTodo todos={todos} setTodos={setTodos}/>
      <TodoList todos={todos} setTodos={setTodos}/>
    </div>
  );
}

export default App;
