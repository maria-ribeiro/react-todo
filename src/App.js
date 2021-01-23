import React, { useState, useEffect } from "react";
import './App.css';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import Bottom from './Bottom';

function App() {
  const [todos, setTodos] = useState([]);
  const [filter, setFilter] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);
  const [count, setCount] = useState(null);

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

  function countHandler(){
    var itemsLeft = todos.filter(todo => !todo.completed);
    setCount(itemsLeft.length);
    console.log(count);
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
  useEffect( saveLocalStorage, [todos, filter]);
  useEffect( filterHandler, [todos, filter]);
  useEffect( countHandler, [todos, count]);


  return (
    <div className="App">
      <header>
        <h1>todo list</h1>
      </header>
        <AddTodo todos={todos} setTodos={setTodos} />
        <TodoList todos={todos} filteredTodos={filteredTodos} setTodos={setTodos} />
        <Bottom filter={filter} setFilter={setFilter} count={count} />
    </div>
  );
}

export default App;
