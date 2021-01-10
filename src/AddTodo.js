import React, { useState } from "react";

function AddTodo(props) {
  const [inputText, setInputText] = useState("");
  function updateInputText(event){
    setInputText(event.target.value);
  }
  function handleSubmit(event){
    event.preventDefault();
    props.setTodos([
      {id: Math.random()*1000 , text: inputText, completed: false},
      ...props.todos
    ]);
    setInputText("");
  }

  return (
    <div className="AddTodo box">
      <form onSubmit={handleSubmit}>
        <input
          value={inputText}
          type="text"
          placeholder="Enter a todo"
          autoFocus="on"
          onChange={updateInputText}
        />
      </form>
      <div className="selection">
        <button
          className={`${props.filter === "all" ? "selected" : "" }`}
          onClick={() => props.setFilter("all")}
        >
          All
        </button>
        <button
          className={`${props.filter === "active" ? "selected" : "" }`}
          onClick={() => props.setFilter("active")}
        >
          Active
        </button>
        <button
          className={`${props.filter === "completed" ? "selected" : "" }`}
          onClick={() => props.setFilter("completed")}
        >
          Completed
        </button>  
      </div>
    </div>
  );
}

export default AddTodo;
