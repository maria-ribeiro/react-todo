import React, { useState, useEffect } from "react";
import './App.css';
import AddTodo from './AddTodo';
import TodoList from './TodoList';

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

  function filterHandler(){
    switch(filter){
      case "completed":
        setFilteredTodos(todos.filter(todo => todo.completed));
        break;
      case "active":
        setFilteredTodos(todos.filter(todo => !todo.completed));
        break;
      default:
        setFilteredTodos(todos);
        break;
    }
  }

  function saveLocalStorage(){
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function getLocalStorage(){
    if (localStorage.getItem("todos") === null) {
      localStorage.setItem("todos", JSON.stringify([]));
    } else {
      let localTodos = JSON.parse(localStorage.getItem("todos"));
      setTodos(localTodos);
    }
  }

  useEffect( getLocalStorage, []);
  useEffect( filterHandler, [todos, filter]);
  useEffect( saveLocalStorage, [todos, filter]);


  return (
    <div className="App">
      <header>
        <h1>todo list</h1>
      </header>
      <AddTodo todos={todos} setTodos={setTodos} filter={filter} setFilter={setFilter}/>
      <TodoList todos={todos} filteredTodos={filteredTodos} setTodos={setTodos} />
    </div>
  );
}

export default App;
